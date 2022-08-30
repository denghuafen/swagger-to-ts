import {
  OperationObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  ResponseObject,
  SchemaObject,
} from "./types";
import { comment, parseRef, upperCamelCaseByPath } from "./utils";
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
export default function apiTS(scheme: string) {
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

  transformAll(schemeObj);
}

// 转化str的interface
function transformAll(schemeObj: Record<string, any>) {
  if (schemeObj.paths) {
    transformPathsObj(schemeObj.paths);
  }
  if (schemeObj.definitions) {
  }
  // paths 转化
  // definitions 转化
}
// ParameterObject
let curIndex = 1;
function transformPathsObj(paths: Record<string, PathItemObject>) {
  let output = "";
  for (const [url, pathItem] of Object.entries(paths)) {
    const interfaceKey = upperCamelCaseByPath(url || `IDefault${curIndex++}`);
    output += `interface ${interfaceKey} { \n`;
    for (const method of httpMethods) {
      const methodItem = pathItem[method];
      if (methodItem) {
        const { description, parameters, responses } = methodItem;
        if (description) {
          output += comment(description);
        }
        if (parameters) {
          /**
           * xxx: pxx
           * xxx: Pxxx
           * \n
           */
          transformPathsParameters(parameters);
        }
        if (responses) {
        }
      }
    }
  }
}
function transformPathsParameters(
  parameters: (ReferenceObject | ParameterObject)[]
) {
  let output = "";
  for (const paramItem of parameters) {
    const { description, name, schema, type } = paramItem as ParameterObject;
    if (description) {
      output += comment(description);
    }
    if (name) {
      output += `${name}: `;
    }
    if (type) {
      output += `${type}`;
    } else if (schema) {
      output += `${transformSchemaObj(schema)}`;
    }
  }
}

export function transformSchemaObj(schema?: ReferenceObject | SchemaObject) {
  let output = "";
  if ((schema as ReferenceObject).$ref) {
    const { parts } = parseRef((schema as ReferenceObject).$ref);
    const typeName = parts[parts.length - 1];
    output += `${typeName}`;
  } else {
    const { type, items } = schema as SchemaObject;
    if (type === "array") {
      output += `Array<${transformSchemaObj(items)}>`;
    } else {
      output += "";
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

function transformParametersArray(
  parameters: (ReferenceObject | ParameterObject)[]
) {
  let output = "";
  for (const param of parameters as any) {
    if (param.name) {
      output += `${param.name}:`;
    }
    if (param.scheme) {
    }
  }
  return output;
}

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
function transformResponses(
  responses?: Record<string, ReferenceObject | ResponseObject>
) {}
