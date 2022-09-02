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
  export default function apiTS(scheme: string, path?: string): string {
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
    return transformAll(schemeObj);
  }
  
  function transformAll(schemeObj: Record<string, any>): string {
    globalSchemeObj = schemeObj;
    let output = "";
    if (schemeObj.paths) {
      output += transformPathsObj(schemeObj.paths);
    }
    // if (schemeObj.definitions) {
    //   output += transformDefinitions(schemeObj.definitions);
    // }
    // paths 转化
    // definitions 转化
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
      output += `}\n`;
    }
    return output;
  }
  
  // 转化接口url中的入参
  function transformParameters(
    parameters: (ReferenceObject | ParameterObject)[]
  ): string {
    let output = "type RequestType = {";
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
    output += `${output} }\n`;
    parseRefRecordObj();
    return output;
  }
  let reponseIndex = 1;
  // 转化接口url中的返回数据
  function transformResponse(
    responses: Record<string, ReferenceObject | ResponseObject>
  ): string {
    let output = "";
    const successResponse = responses["200"];
    if (successResponse) {
      // 包含$ref
      if ((successResponse as ReferenceObject).$ref) {
        output += `type ResponseType = ${parseSchemaReferenceObject(
          successResponse as ReferenceObject
        )}`;
      } else {
        // 普通的schema的对象
        const { description, schema } = successResponse as ResponseObject;
        if (description) {
          output += `    ${comment(description)}`;
        }
        if (schema) {
          output += `type ResponseType = ${parseSchemaReferenceObject(
            schema
          )};\n`;
        }
      }
      parseRefRecordObj();
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
      return transformSchemaObj(schema as SchemaObject);
    }
  }
  
  // 生成泛型名称
  // function createdGenericName(ref: string): string {
  //   const refArr = ref.match(regGeneric);
  //   if (!refArr) {
  //     console.error(`${ref},不是泛型结构`);
  //     return "";
  //   }
  //   let output = "";
  //   const swaggerArrayStr = ["List"];
  //   if (swaggerArrayStr.includes(refArr[1])) {
  //     output += `Array<T>`;
  //   } else {
  //     output += `${refArr[1]}<T>`;
  //   }
  //   return output;
  // }
  // 解析$ref对应的字符串
  // 是作为属性key的value存在的，不需要适用T来替代泛型
  // partStr可能性结果：Map«string,string»、PageVO«DistCommunityList»、List«DistCommunityList»
  // function parseRefStr(ref: string) {
  //   const { parts } = parseRef(ref);
  //   const partStr = parts[parts.length - 1];
  //   const refArr = partStr.match(regGeneric);
  //   let output = "";
  //   // 包含泛型
  //   if (refArr) {
  //     if (refArr[1].includes("List")) {
  //       refArr[1] = refArr[1].replace(/List/g, "Array");
  //     } else if (refArr[1].includes("Map")) {
  //       refArr[1] = refArr[1].replace(/Map/g, "Record");
  //     } else {
  //       output += `${partStr}`;
  //     }
  //   } else {
  //     output += `${ref}`;
  //   }
  //   output = output.replace(/«/g, "<").replace(/»/g, ">");
  //   return output;
  // }
  // 是作为属性key的value存在的
  // 处理普通的schema的数据结构
  export function transformSchemaObj(schema: SchemaObject): string {
    let output = "";
    const { type, items, description, properties, enum: enumKeys } = schema;
    if (description) {
      output += `${comment(description)}`;
    }
    const tsTypeVal = tsType(type);
    if (tsTypeVal === "Array") {
      output += `Array<${parseSchemaReferenceObject(items)}>`;
    } else if (properties) {
      Object.keys(properties).forEach((propKey) => {
        output += `${propKey}?: `;
        const schemaOrRef = properties[propKey];
        output += `${parseSchemaReferenceObject(schemaOrRef)}`;
      });
    } else {
      output += `${tsTypeVal}`;
    }
    return output;
  }
  
  interface RefTree {
    refPartName: string;
    formatName: string;
    interfaceStr: string;
    // children: Array<RefTree>;
  }
  const refTreeMap = new Map<string, RefTree>();
  function parseRefRecordObj() {
    for (const [key, value] of refTreeMap) {
      if (!value.interfaceStr) {
        // 生成接口(interfaceStr)
        value.interfaceStr += createTypeStrByDefinition(
          value.refPartName,
          globalSchemeObj as OpenAPI2
        );
      }
    }
  }
  
  function createTypeStrByDefinition(refName: string, schemaObj: OpenAPI2) {
    if (!schemaObj.definitions) return "";
    let output = `interface ${refName} {\n`;
    const definitionObj = schemaObj.definitions[refName];
    output += parseSchemaReferenceObject(definitionObj);
    output += `};`;
    return output;
  }
  // function collectionRefObj(refObj: RefTree) {
  //   const { refPartName } = refObj;
  //   if (!refTreeMap.get(refPartName)) {
  //     refTreeMap.set(refPartName, refObj);
  //   }
  // }
  // 解析$ref对应的字符串
  // 是作为属性key的value存在的，不需要适用T来替代泛型
  // partStr可能性结果：Map«string,string»、PageVO«DistCommunityList»、List«DistCommunityList»
  export function transfromReferenceObj(schema: ReferenceObject): string {
    const { parts } = parseRef(schema.$ref);
    const partStr = parts[parts.length - 1];
    // let newStr = "";
    // transformDefinitionsByDefinitionKey(globalSchemeObj, partStr);
    const newStr = partStr
      .replace(/«/g, "<")
      .replace(/»/g, ">")
      .replace(/List/g, "Array")
      .replace(/Map/g, "Record")
      .replace(/<Void>/g, "");
    // 收集definitions
    if (!refTreeMap.get(partStr)) {
      refTreeMap.set(partStr, {
        refPartName: partStr,
        interfaceStr: "",
        formatName: newStr,
      });
    }
    return newStr;
  }
  type FnString = () => string;
  // 根据definitionKey生成对应的interface
  export function transformDefinitionsByDefinitionKey(
    globalSchemeObj: OpenAPI2,
    definitionKey: string
  ) {
    let output = "";
    const refArr = definitionKey.match(regGeneric);
    if (refArr) {
      if (refArr[1] === "List") return "";
      output += `interface ${refArr[1]}<T> {\n`;
      output += transformDefinitionsProps(
        globalSchemeObj.definitions[definitionKey]
      );
      output += `}`;
      output += transformDefinitionsByDefinitionKey(
        globalSchemeObj,
        definitionKey
      );
      return output;
      // output += parseDefinitionsToInterface(globalSchemeObj, refArr[1], true);
      // const dealFn: FnString = swaggerType[refArr[1]] || defaultDealFn;
      // dealFn();
      // if (refArr[1] === "List") {
      //   output += `Array<${transformDefinitionsByDefinitionKey(
      //     globalSchemeObj,
      //     refArr[2]
      //   )}>`;
      // } else {
      //   output += parseDefinitionsToInterface(globalSchemeObj, refArr[1]);
      // }
    } else {
      if (definitionKey === "Void") return "";
      // if (!globalSchemeObj.definitions) return "";
      return transformDefinitionsProps(
        globalSchemeObj.definitions[definitionKey]
      );
      // const definitionsObj = globalSchemeObj.definitions[definitionKey];
      // const { properties, description } = definitionsObj;
      // if (description) {
      //   output += `${comment(description)}`;
      // }
      // if (properties) {
      //   Object.keys(properties).forEach((propKey) => {});
      // }
    }
  
    // const definitionsKeyItem = Object.keys(definitions).filter(
    //   (key) => key === definitionsKey
    // )[0];
    // if (!definitionsKeyItem) {
    //   console.error(`$ref 中不存在${definitionsKey}`);
    //   return;
    // }
    // const definitionsObj = definitions[definitionsKeyItem];
    // const { type, enum: enumKeys, items } = definitionsObj;
  }
  function transformDefinitionsProps(props: SchemaObject) {
    const {} = props;
  }
  // 解析definitions的props
  export function parseDefinitionsToInterface(
    globalSchemeObj: OpenAPI2,
    definitionKey: string,
    isGenericFlag: boolean = false
  ): string {
    let output = "";
    if (!globalSchemeObj.definitions) return "";
    if (definitionKey === "List" || definitionKey === "Void") return "";
    const definitionsObj = globalSchemeObj.definitions[definitionKey];
    if (isGenericFlag) {
    }
    return output;
  
    // const { description, properties } = definitionsObj;
    // let output = "";
    // if (description) {
    //   output += comment(description);
    // }
    // output += isGeneric(definitionKey)
    //   ? `interface ${createGenericInterfaceName(definitionKey)} {\n`
    //   : `interface ${definitionKey} {\n`;
  
    // if (properties) {
    //   Object.keys(properties).forEach((propName) => {
    //     output += `  ${propName}?: `;
    //     const propItem = properties[propName];
    //     output += parseSchemaReferenceObject(propItem);
    //   });
    // }
    // output += `}\n`;
    // return output;
  }
  
  function transformDefinitions(
    definitions: Record<string, SchemaObject>
  ): string {
    let output = "";
    for (const interfaceName of Object.keys(definitions)) {
      output += `interface ${dealInterfaceName(interfaceName)} { \n`;
      const { description, properties } = definitions[interfaceName];
      if (description) {
        output += comment(description);
      }
      if (properties) {
        for (const proKey of Object.keys(properties)) {
          // const { type, description, $ref, items } = properties[proKey] as any;
          // if (description) {
          //   output += `  ${comment(description)}`;
          // }
          // output += `  ${proKey}?: `;
          // if (type) {
          //   const tsTypeVal = tsType(type);
          //   if (tsTypeVal === "Array") {
          //     output += `Array<${transformSchemaObj(items)}>;\n`;
          //   } else {
          //     output += `${tsType(type)};\n`;
          //   }
          // } else if ($ref) {
          //   const { parts } = parseRef($ref);
          //   const typeName = parts[parts.length - 1];
          //   output += `${typeName}; \n`;
          // }
        }
      }
  
      output += `}\n`;
    }
    return output;
  }
  