import {
  OperationObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  ResponseObject,
  SchemaObject,
} from "./types";
import {
  comment,
  dealInterfaceName,
  parseRef,
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
export default function apiTS(scheme: string): string {
  const schemeObj: Record<string, string> = {};
  const tempObj = JSON.parse(scheme);
  Object.keys(tempObj).forEach((k) => {
    if (includeKey.includes(k)) {
      schemeObj[k] = tempObj[k];
    }
  });

  // const newSchemeObj = JSON.parse(JSON.stringify(schemeObj), (k, v) => {
  //   if (k !== "$ref" || typeof v !== "string") return;
  //   const { url, parts } = parseRef(v);
  //   if (url) {
  //     console.log(`存在${url}，做些什么呢。。。`);
  //   }
  //   const [base, ...rest] = parts;
  //   return `${base}["${rest.join('"]["')}"]`;
  // });

  return transformAll(schemeObj);
}

// 转化str的interface
function transformAll(schemeObj: Record<string, any>): string {
  let output = "";
  if (schemeObj.paths) {
    output += transformPathsObj(schemeObj.paths);
  }
  if (schemeObj.definitions) {
    output += transformDefinitions(schemeObj.definitions);
  }
  // paths 转化
  // definitions 转化
  return output;
}
// ParameterObject
let curIndex = 1;
function transformPathsObj(paths: Record<string, PathItemObject>): string {
  let output = "";
  for (const [url, pathItem] of Object.entries(paths)) {
    output += comment(url);
    const interfaceKey = upperCamelCaseByPath(url || `IDefault${curIndex++}`);
    output += `interface ${interfaceKey} { \n`;
    // 这里for循环可以删除，不影响整体结构
    for (const method of httpMethods) {
      const methodItem = pathItem[method];
      if (methodItem) {
        const { description, parameters, responses } = methodItem;
        if (description) {
          output += `  ${comment(description)}`;
        }
        if (parameters) {
          output += transformPathsParameters(parameters);
        }
        output += "";
        if (responses) {
          output += transformPathsResponse(responses);
        }
      }
    }
    output += `}\n`;
  }
  return output;
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
        const { type, description, $ref, items } = properties[proKey] as any;
        if (description) {
          output += `  ${comment(description)}`;
        }
        output += `  ${proKey}?: `;
        if (type) {
          const tsTypeVal = tsType(type);
          if (tsTypeVal === "Array") {
            output += `Array<${transformSchemaObj(items)}>;\n`;
          } else {
            output += `${tsType(type)};\n`;
          }
        } else if ($ref) {
          const { parts } = parseRef($ref);
          const typeName = parts[parts.length - 1];
          output += `${typeName}; \n`;
        }
      }
    }

    output += `}\n`;
  }
  return output;
}
// 转化接口url中的入参
function transformPathsParameters(
  parameters: (ReferenceObject | ParameterObject)[]
): string {
  let output = "  paramInterface: { \n";
  for (const paramItem of parameters) {
    const { description, name, schema, type } = paramItem as ParameterObject;
    if (description) {
      output += `    ${comment(description)}`;
    }
    if (name) {
      output += `    ${name}?: `;
    }

    if (type) {
      output += `${tsType(type)};\n`;
    } else if (schema) {
      output += `${transformSchemaObj(schema)};\n`;
    }
  }
  return `${output}  } \n`;
}
let reponseIndex = 1;
// 转化接口url中的返回数据
function transformPathsResponse(
  responses: Record<string, ReferenceObject | ResponseObject>
): string {
  let output = `  responseInterface: { \n`;
  const successResponse = responses["200"];
  if (successResponse) {
    if ((successResponse as ReferenceObject).$ref) {
    } else {
      const { description, schema } = successResponse as ResponseObject;
      if (description) {
        output += `    ${comment(description)}`;
      }
      if (schema) {
        output += `    response${reponseIndex++}: ${transformSchemaObj(schema)};\n`;
      }
    }
  }
  output += `  }\n`;
  return output;
}
export function transformSchemaObj(
  schema?: ReferenceObject | SchemaObject
): string {
  let output = "";
  if ((schema as ReferenceObject).$ref) {
    const { parts } = parseRef((schema as ReferenceObject).$ref);
    const typeName = parts[parts.length - 1];
    output += `${dealInterfaceName(typeName)}`;
  } else {
    const { type, items } = schema as SchemaObject;
    const tsTypeVal = tsType(type);
    if (tsTypeVal === "Array") {
      output += `Array<${transformSchemaObj(items)}>`;
    } else {
      output += `${dealInterfaceName(tsTypeVal)}`;
    }
  }
  return output;
}
// function replacePathParamsWithTypes(
//   url: string,
//   params: NonNullable<PathItemObject["parameters"]>
// ) {
//   let result = url;

//   params.forEach((param) => {
//     if ("in" in param && param.in === "path") {
//       if (param.schema && "type" in param.schema) {
//         result = result.replace(
//           `{${param.name}}`,
//           `\${${nodeType(param.schema)}}`
//         );
//       } else if (param.type) {
//         result = result.replace(
//           `{${param.name}}`,
//           `\${${nodeType({ type: param.type })}}`
//         );
//       }
//     }
//   });

//   return result;
// }
// let curIndex = 1;
// function transformPathsObj(paths: Record<string, PathItemObject>) {
//   let output = "";
//   for (const [url, pathItem] of Object.entries(paths)) {
//     const interfaceKey = upperCamelCaseByPath(url || `IRandom${curIndex++}`);
//     if (pathItem.description) output += comment(pathItem.description);
//     output += `interface ${interfaceKey} { \n`;
//     let result = {
//       interfaceName: "xxxx",
//       parameters: [
//         { name: "userId", type: "string" },
//         { name: "request", type: "definitions/AdminRoleDelRequest" },
//       ],
//       responses: [
//         {
//           name: "",
//           type: "",
//         },
//         {
//           name: "",
//           type: "",
//         },
//       ],
//     };
//   }
// }

// function transformParametersArray(
//   parameters: (ReferenceObject | ParameterObject)[]
// ) {
//   let output = "";
//   for (const param of parameters as any) {
//     if (param.name) {
//       output += `${param.name}:`;
//     }
//     if (param.scheme) {
//     }
//   }
//   return output;
// }

// function transformSchemeObj(schemeObj: SchemaObject & ReferenceObject) {
//   if (schemeObj.type) {
//     return schemeObj.type;
//   }
//   if (!schemeObj.$ref) {
//     return `Record<string,any>`;
//   }
//   if (schemeObj.$ref) {
//   }
// }
// function transformResponses(
//   responses?: Record<string, ReferenceObject | ResponseObject>
// ) {}
