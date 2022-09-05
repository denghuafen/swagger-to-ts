import { forEachRefMap, updateRefMapByInterface } from "./refMap";
import parseSchemaReferenceObject from "./transformSchemaOrRef";
import { OpenAPI2, ReferenceObject, RefTree } from "./types";
import { comment, parseRef } from "./utils";

// 解析存储的definitoin数据，并生成ts文件
export function parseRefRecordObj(globalSchemeObj: OpenAPI2) {
  let output = "";
  forEachRefMap((key, value) => {
    if (!value.interfaceStr) {
      updateRefMapByInterface(
        key,
        createTypeStrByDefinition(value, globalSchemeObj)
      );
    }
    output += `${value.interfaceStr} \n`;
  });
  return output;
}

// 创建typescript的str，用于输出到.ts文件中
function createTypeStrByDefinition(refTreeObj: RefTree, schemaObj: OpenAPI2) {
  if (!schemaObj.definitions) return "";
  const { interfaceName, refPartName } = refTreeObj;
  let output = `${comment(refPartName)}`;
  output += `interface ${interfaceName} {\n`;
  const definitionObj = schemaObj.definitions[refPartName];
  output += parseSchemaReferenceObject(definitionObj);
  output += `\n };`;
  return output;
}
