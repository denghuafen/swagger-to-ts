// import { parseRef } from "oepnapi-my-ts/utils";
// import { SchemaObject } from "openapi-typescript";
// import { parseSchemaReferenceObject } from "./toTsByPath";
// import { OpenAPI2, ReferenceObject } from "./types";
// import { regGeneric, tsType } from "./utils";
// let output = "";
// const keyMapRes = new Map<
//   string,
//   {
//     definitionKey: string;
//     interfaceOutput: string;
//     standardKey: string;
//   }
// >();
// export default function transformDefinitions(
//   definitionKey: string,
//   globalSchemeObj: OpenAPI2
// ) {
//   if (!globalSchemeObj.definitions) {
//     console.error(`json数据中不存在definitions字段`);
//     return null;
//   }
//   const res = keyMapRes.get(definitionKey);
//   if (res) return res;
//   const definitionObj = globalSchemeObj.definitions[definitionKey];
//   if (!definitionObj) return null;
//   const matchRes = definitionKey.match(regGeneric);
//   if (matchRes) {
//     if (definitionObj.properties) {
//       output += `interface ${matchRes[1]}<T> { \n`;
//       Object.keys(definitionObj.properties).forEach((propKey) => {
//         output += `  ${propKey}?: `;
//         const schemaOrRef = definitionObj.properties![propKey];
//         if ((schemaOrRef as ReferenceObject).$ref) {
//           const { parts } = parseRef((schemaOrRef as ReferenceObject).$ref);
//           const refStr = parts[parts.length - 1];
//           if (refStr === matchRes[2]) {
//             // output+=
//             output+=``
//             transformDefinitions(matchRes[2], globalSchemeObj);
//           } else {
//             // 不在definitions中，表示为swagger中内置的类型
//             // 如果List<xx>、int、etc...
//           }
//         } else {
//             const {type,properties,enum:enumKeys,items} = schemaOrRef as SchemaObject;
//         }
//         // output += `${parseSchemaReferenceObject(schemaOrRef)}`;
//       });
//       output += `};`;
//       return output;
//       //   parseDefinitionsProps(`matchRes[1]<T>`, definitionObj.properties);
//     }
//   } else {
//   }
// }
// // 解析包含properties的definitions
// function parseDefinitionsProps(
//   interfaceName: string,
//   propsObj: Record<string, SchemaObject | ReferenceObject>
// ): string {
//   output += `interface ${interfaceName} { \n`;
//   Object.keys(propsObj).forEach((propKey) => {
//     output += `${propKey}?: `;
//     const schemaOrRef = propsObj[propKey];
//     output += `${parseSchemaReferenceObject(schemaOrRef)}`;
//   });
//   output += `};`;
//   return output;
//   //   const {
//   //     properties,
//   //     description,
//   //     type,
//   //     items,
//   //     enum: enumKeys,
//   //   } = definitionObj;
//   //   // 数组
//   //   output += `type ${interfaceName} = `;
//   //   if (type === "array") {
//   //     output+= `Array<${}>`;
//   //   } else {
//   //     output += `interface ${interfaceName} { \n`;
//   //   }
//   //   output += `}`;
//   //   return output;
// }

import { parseSchemaReferenceObject } from "./toTsByPath";
import { OpenAPI2 } from "./types";

// function transformDefinitionSchema(schema: SchemaObject | ReferenceObject) {
//   // if()
// }

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
