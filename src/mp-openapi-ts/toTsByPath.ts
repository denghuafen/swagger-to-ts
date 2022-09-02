import {
  OpenAPI2,
  OperationObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  RefParts,
  ResponseObject,
  SchemaObject,
} from "./types";
import {
  comment,
  createGenericInterfaceName,
  dealInterfaceName,
  formatDataStrucName,
  isGeneric,
  isReferenObj,
  parseRef,
  regGeneric,
  tsType,
  upperCamelCaseByPath,
} from "./utils";
const httpMethods = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace",
] as const;

const includeKey = ["paths", "definitions", "tags"];
export let globalSchemeObj: Record<string, any> | null = null;
export default function apiTS(
  scheme: string,
  path?: string
): { output: string; other: string } {
  console.log("生成路径：", path);
  const schemeObj: Record<string, any> = {};
  const tempObj = JSON.parse(scheme);
  Object.keys(tempObj).forEach((k) => {
    if (includeKey.includes(k)) {
      schemeObj[k] = tempObj[k];
    }
  });
  if (path) {
    schemeObj.paths = {
      [path]: schemeObj.paths[path],
    };
  }
  return {
    output: transformAll(schemeObj),
    other: "",
  };
}
function transformAll(schemeObj: Record<string, any>): string {
  globalSchemeObj = schemeObj;
  let output = "";
  if (schemeObj.paths) {
    output += transformPathsObj(schemeObj.paths);
  }
  return output;
}
/**
 *
 * 遇见入参、返回参数
 * 生成type，如:
 * type ResponseType = Cbd<Edb<AbcVO>>;
 */
// ParameterObject
let curIndex = 1;
function transformPathsObj(paths: Record<string, PathItemObject>): string {
  let output = "";
  for (const [url, pathItem] of Object.entries(paths)) {
    output += comment(url);
    const interfaceKey = upperCamelCaseByPath(url || `IDefault${curIndex++}`);
    output += `namespace ${interfaceKey} { \n`;
    // 这里for循环可以删除，不影响整体结构
    for (const method of httpMethods) {
      const methodItem = pathItem[method];
      if (methodItem) {
        const { description, parameters, responses } = methodItem;
        if (description) {
          output += `  ${comment(description)}`;
        }
        if (parameters) {
          output += transformParameters(parameters);
        }
        output += "";
        if (responses) {
          output += transformResponse(responses);
        }
      }
    }
    output += parseRefRecordObj();
    output += `\n}`;
  }
  return output;
}

// 转化接口url中的入参
function transformParameters(
  parameters: (ReferenceObject | ParameterObject)[]
): string {
  let output = "type RequestParamsType = {\n";
  for (const paramItem of parameters) {
    const {
      description,
      enum: enumKey,
      name,
      items,
      schema,
      type,
    } = paramItem as ParameterObject;
    if (description) {
      output += `    ${comment(description)}`;
    }
    if (name) {
      output += `    ${name}?: `;
    }

    if (type) {
      output += `${tsType(type)};\n`;
    } else if (enumKey) {
      output += `${enumKey.join("|")}`;
    } else if (schema || items) {
      output += `${parseSchemaReferenceObject(schema || items)};\n`;
    }
  }
  output += `}\n`;
  return output;
}
// 转化接口url中的返回数据
function transformResponse(
  responses: Record<string, ReferenceObject | ResponseObject>
): string {
  let output = "";
  const successResponse = responses["200"];
  if (successResponse) {
    // 包含$ref
    if ((successResponse as ReferenceObject).$ref) {
      output += `type ResponseDataType = ${parseSchemaReferenceObject(
        successResponse as ReferenceObject
      )}`;
    } else {
      // 普通的schema的对象
      const { description, schema } = successResponse as ResponseObject;
      if (description) {
        output += `    ${comment(description)}`;
      }
      if (schema) {
        output += `type ResponseDataType = ${parseSchemaReferenceObject(
          schema
        )};\n`;
      }
    }
  }

  return output;
}
// 分类处理不同的schema描述对象
export function parseSchemaReferenceObject(
  schema?: SchemaObject | ReferenceObject
): string {
  if (!schema) return "";
  if ((schema as ReferenceObject).$ref) {
    return transfromReferenceObj(schema as ReferenceObject);
  } else {
    const { properties } = schema as SchemaObject;
    if (properties) {
      return transformProps(properties);
    } else {
      return transformSchemaObj(schema as SchemaObject);
    }
  }
}

function transformProps(
  properties: Record<string, ReferenceObject | SchemaObject>
) {
  let output = "";
  Object.keys(properties).forEach((propKey) => {
    const { description } = properties[propKey] as SchemaObject;
    if (description) {
      output += `${comment(description)}`;
    }
    output += `  ${propKey}?: ${parseSchemaReferenceObject(
      properties[propKey]
    )}\n`;
  });
  return output;
}
// 是作为属性key的value存在的
// 处理普通的schema的数据结构
export function transformSchemaObj(schema: SchemaObject): string {
  let output = "";
  const { type, items, description, properties, enum: enumKeys } = schema;
  const tsTypeVal = tsType(type);
  if (tsTypeVal === "Array") {
    output += `Array<${parseSchemaReferenceObject(items)}>`;
  } else {
    output += `${tsTypeVal}`;
  }

  return output;
}

interface RefTree {
  // definition中定义的名称
  refPartName: string;
  // 格式化后用于作为属性值的名称
  formatName: string;
  // definition生成的接口字符串
  interfaceStr: string;
  // 生成interface的名称
  interfaceName: string;
  // children: Array<RefTree>;
}
const refTreeMap = new Map<string, RefTree>();
function parseRefRecordObj() {
  let output = "";
  for (const [key, value] of refTreeMap) {
    if (!value.interfaceStr) {
      // 生成接口(interfaceStr)
      value.interfaceStr += createTypeStrByDefinition(
        value.refPartName,
        value.interfaceName,
        globalSchemeObj as OpenAPI2
      );
    }
    output += `${value.interfaceStr} \n`;
  }
  return output;
}

function createTypeStrByDefinition(
  refName: string,
  formatName: string,
  schemaObj: OpenAPI2
) {
  if (!schemaObj.definitions) return "";
  let output = `interface ${formatName} {\n`;
  const definitionObj = schemaObj.definitions[refName];
  output += parseSchemaReferenceObject(definitionObj);
  output += `\n };`;
  return output;
}

function setRefMap(refName: string) {
  let newStr = formatDefinitionName(refName);
  const res = newStr.match(/((?!\<).*?)\<((?!\>).*?)\>$/);
  // if (res) {
  //   newStr = `${res[1]}<T = ${res[2]}>`;
  // }
  refTreeMap.set(refName, {
    refPartName: refName,
    interfaceStr: "",
    formatName: newStr,
    interfaceName: res ? `${res[1]}<T = ${res[2]}>` : newStr,
  });
  return refTreeMap.get(refName);
}
// 解析$ref对应的字符串
// 是作为属性key的value存在的，不需要适用T来替代泛型
// partStr可能性结果：Map«string,string»、PageVO«DistCommunityList»、List«DistCommunityList»
export function transfromReferenceObj(schema: ReferenceObject): string {
  const { parts } = parseRef(schema.$ref);
  const partStr = parts[parts.length - 1];
  let refMapObj = refTreeMap.get(partStr);
  if (refMapObj) {
    return refMapObj.formatName;
  } else {
    return setRefMap(partStr)!.formatName;
  }
}
let chineseGeneriIndex = 1;
function formatDefinitionName(refName: string) {
  let newStr = refName
    .replace(/«/g, "<")
    .replace(/»/g, ">")
    .replace(/List/g, "Array")
    .replace(/Map/g, "Record")
    .replace(/<Void>/g, "");
  // 包含中文字符
  const includeChinese = /[\u4e00-\u9fa5]/g;
  // 全是中文字符
  const allChinese = /^[\u4e00-\u9fa5]+$/g;
  // 包含括号
  const includeParentheses = /\(|\)/g;
  if (allChinese.test(newStr)) {
    newStr = newStr.replace(allChinese, `Custom${chineseGeneriIndex++}`);
  }
  if (includeParentheses.test(newStr) || includeChinese.test(newStr)) {
    newStr = newStr.replace(includeChinese, "").replace(includeParentheses, "");
  }
  // 处理泛型格式的ref名称
  // newStr = formatGenericDataStrucName(newStr);
  return newStr;
}

function formatGenericDataStrucName(interName: string) {
  const reg = /((?!\<).*?)\<((?!\>).*?)\>$/;
  const result = interName.match(reg);
  if (result) {
    const subGroup = result[1];
    const subGroupGeneric = result[2];
    interName = `${subGroup}<T = ${formatGenericDataStrucName(
      subGroupGeneric
    )}>`;
  }
  return interName;
}
