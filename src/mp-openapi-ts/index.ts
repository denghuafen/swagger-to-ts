import {
  parseRefRecordObj,
} from "./transformDefinition";
import parseSchemaReferenceObject from "./transformSchemaOrRef";
import {
  OpenAPI2,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  ResponseObject,
} from "./types";
import { comment, tsType, upperCamelCaseByPath } from "./utils";
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
export let globalSchemeObj: OpenAPI2 | null = null;
export default function apiTS(
  scheme: string,
  path?: string
): { output: string; other: string } {
  console.log("生成路径：", path);
  const schemeObj: OpenAPI2 & { [index: string]: unknown } = {
    swagger: "",
  };
  const tempObj = JSON.parse(scheme);
  Object.keys(tempObj).forEach((k) => {
    if (includeKey.includes(k)) {
      schemeObj[k] = tempObj[k];
    }
  });
  if (path) {
    schemeObj.paths = {
      [path]: schemeObj.paths ? schemeObj.paths[path] : {},
    };
  }
  return {
    output: transformAll(schemeObj),
    other: "",
  };
}
function transformAll(schemeObj: OpenAPI2): string {
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
    if (globalSchemeObj) {
      output += parseRefRecordObj(globalSchemeObj);
    }
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
      output += `${enumKey.map((item) => `"${item}"`).join("|")}`;
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


