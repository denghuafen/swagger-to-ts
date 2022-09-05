import { comment, isRef, parseRef, tsType } from "./utils";
import { ReferenceObject, SchemaObject } from "./types";
import { getRefMap, setRefMap } from "./refMap";

// 分类处理不同的schema描述对象
export default function parseSchemaReferenceObject(
  schema?: SchemaObject | ReferenceObject
): string {
  if (!schema) return "";
  if (isRef(schema)) {
    // 保存
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
// 解析$ref对应的字符串，并且缓存对应的关系映射
// 是作为属性key的value存在的，不需要适用T来替代泛型
// partStr可能性结果：Map«string,string»、PageVO«DistCommunityList»、List«DistCommunityList»
export function transfromReferenceObj(schema: ReferenceObject): string {
  const { parts } = parseRef(schema.$ref);
  const refName = parts[parts.length - 1];
  setRefMap(refName);
  return getRefMap(refName)!.formatName;
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
function transformSchemaObj(schema: SchemaObject): string {
  let output = "";
  const { type, items, enum: enumKeys } = schema;
  const tsTypeVal = tsType(type);
  if (tsTypeVal === "Array") {
    output += `Array<${parseSchemaReferenceObject(items)}>`;
  } else if (enumKeys) {
    output += `${enumKeys.map((item) => `"${item}"`).join("|")}`;
  } else {
    output += `${tsTypeVal}`;
  }

  return output;
}
