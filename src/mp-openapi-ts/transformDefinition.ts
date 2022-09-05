import { parseSchemaReferenceObject } from "./index";
import { OpenAPI2, ReferenceObject, RefTree } from "./types";
import { comment, parseRef } from "./utils";

const refTreeMap = new Map<string, RefTree>();
// 解析存储的definitoin数据，并生成ts文件
export function parseRefRecordObj(globalSchemeObj: OpenAPI2) {
  let output = "";
  for (const [key, value] of refTreeMap) {
    // 如果在黑名单内，不需要生成对应的interface
    if (isExsitBlackList(value.refPartName)) continue;
    if (!value.interfaceStr) {
      // 生成接口(interfaceStr)
      value.interfaceStr += createTypeStrByDefinition(value, globalSchemeObj);
    }
    output += `${value.interfaceStr} \n`;
  }
  return output;
}
// 解析$ref对应的字符串，并且缓存对应的关系映射
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
// 表示不需要保存/生成这个数据结构的interface
function isExsitBlackList(refName: string): boolean {
  const blackListDataStructure = [/Map/g];
  return blackListDataStructure.some((regItem) => regItem.test(refName));
}
// 保存ref对应的definition
function setRefMap(refName: string) {
  let newStr = formatDefinitionName(refName);
  const res = newStr.match(/((?!\<).*?)\<((?!\>).*?)\>$/);
  refTreeMap.set(refName, {
    refPartName: refName,
    interfaceStr: "",
    formatName: newStr,
    interfaceName: res ? `${res[1]}<T = ${res[2]}>` : newStr,
  });
  return refTreeMap.get(refName);
  //   if (blackListDataStructure.some((regItem) => regItem.test(refName))) {
  //     return {
  //       formatName: newStr,
  //     };
  //   } else {
  //     const res = newStr.match(/((?!\<).*?)\<((?!\>).*?)\>$/);
  //     refTreeMap.set(refName, {
  //       refPartName: refName,
  //       interfaceStr: "",
  //       formatName: newStr,
  //       interfaceName: res ? `${res[1]}<T = ${res[2]}>` : newStr,
  //     });
  //     return refTreeMap.get(refName);
  //   }
}
// 格式化definitions中的名字；
// 名字包括：中文，()，
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
  return newStr;
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
