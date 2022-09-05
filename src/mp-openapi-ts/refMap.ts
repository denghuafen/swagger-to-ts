import { RefTree } from "./types";
import { formatDefinitionName } from "./utils";

/**
 * @description 这个文件用于草走definition的名称映射，提供了一系列增、删、查、改方法
 * refName====>RefTree
 */
const refTreeMap = new Map<string, RefTree>();

// 保存ref对应的definition
export function setRefMap(refName: string): void {
  if (!refTreeMap.get(refName)) {
    let newStr = formatDefinitionName(refName);
    const res = newStr.match(/((?!\<).*?)\<((?!\>).*?)\>$/);
    refTreeMap.set(refName, {
      refPartName: refName,
      interfaceStr: "",
      formatName: newStr,
      interfaceName: res ? `${res[1]}<T = ${res[2]}>` : newStr,
    });
  }
}

export function getRefMap(refName: string): RefTree | undefined {
  return refTreeMap.get(refName);
}

export function updateRefMapByInterface(refName: string, interfaceStr: string) {
  const refTreeObj = getRefMap(refName);
  if (refTreeObj) {
    refTreeObj.interfaceStr = interfaceStr;
  }
}

export function forEachRefMap(callBack: (key: string, value: RefTree) => void) {
  for (const [key, value] of refTreeMap) {
    // 如果在黑名单内，不需要生成对应的interface
    if (isExsitBlackList(value.refPartName)) continue;
    callBack(key, value);
  }
}

// 表示不需要保存/生成这个数据结构的interface
function isExsitBlackList(refName: string): boolean {
  const blackListDataStructure = [/Map/g];
  return blackListDataStructure.some((regItem) => regItem.test(refName));
}
