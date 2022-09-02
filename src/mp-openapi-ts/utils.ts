export const regGeneric = /((?!\«).*?)\«((?!\»).*?)\»$/;

/**
 * 通过路径生成大驼峰
 * @param path /biz/account/role/del
 * @returns BizAccountRoleDel
 */
export function upperCamelCaseByPath(path: string) {
  let pathArr = path.split("/");
  pathArr = pathArr
    .map((item) => {
      if (item && item[0]) {
        const itemArr = item.split("");
        itemArr[0] = itemArr[0].toUpperCase();
        return itemArr.join("");
      } else {
        return "";
      }
    })
    .filter((item) => !!item);

  return pathArr.join("");
}

import type {
  OpenAPI2,
  OpenAPI3,
  ReferenceObject,
  RefParts,
  SchemaObject,
  SourceTargetMap,
} from "./types.js";

type CommentObject = {
  const?: boolean; // jsdoc without value
  default?: string; // jsdoc with value
  deprecated?: boolean; // jsdoc without value
  description?: string; // jsdoc with value
  enum?: boolean; // jsdoc without value
  example?: string; // jsdoc with value
  format?: string; // not jsdoc
  nullable?: boolean; // Node information
  title?: string; // not jsdoc
  type: string; // Type of node
};

const COMMENT_RE = /\*\//g;
const LB_RE = /\r?\n/g;
const DOUBLE_QUOTE_RE = /"/g;
const SINGLE_QUOTE_RE = /'/g;
const ESC_0_RE = /\~0/g;
const ESC_1_RE = /\~1/g;
const TILDE_RE = /\~/g;
const FS_RE = /\//g;

/**
 * Preparing comments from fields
 * @see {comment} for output examples
 * @returns void if not comments or jsdoc format comment string
 */
export function prepareComment(v: CommentObject): string | void {
  const commentsArray: Array<string> = [];

  // * Not JSDOC tags: [title, format]
  if (v.title) commentsArray.push(`${v.title} `);
  if (v.format) commentsArray.push(`Format: ${v.format} `);

  // * JSDOC tags without value
  // 'Deprecated' without value
  if (v.deprecated) commentsArray.push(`@deprecated `);

  // * JSDOC tags with value
  const supportedJsDocTags: Array<keyof CommentObject> = [
    "description",
    "default",
    "example",
  ];
  for (let index = 0; index < supportedJsDocTags.length; index++) {
    const field = supportedJsDocTags[index];
    const allowEmptyString = field === "default" || field === "example";
    if (v[field] === undefined) {
      continue;
    }
    if (v[field] === "" && !allowEmptyString) {
      continue;
    }
    const serialized =
      typeof v[field] === "object"
        ? JSON.stringify(v[field], null, 2)
        : v[field];
    commentsArray.push(`@${field} ${serialized} `);
  }

  // * JSDOC 'Constant' without value
  if (v.const) commentsArray.push(`@constant `);

  // * JSDOC 'Enum' with type
  if (v.enum) {
    const canBeNull = v.nullable ? `|${null}` : "";
    commentsArray.push(`@enum {${v.type}${canBeNull}}`);
  }

  if (!commentsArray.length) return;

  return comment(commentsArray.join("\n"));
}

export function comment(text: string): string {
  const commentText = text.trim().replace(COMMENT_RE, "*\\/");

  // if single-line comment
  if (commentText.indexOf("\n") === -1) {
    return `/** ${commentText} */\n`;
  }

  // if multi-line comment
  return `/**
  * ${commentText.replace(LB_RE, "\n  * ")}
  */\n`;
}

export function parseRef(ref: string): { url?: string; parts: string[] } {
  if (typeof ref !== "string" || !ref.includes("#")) return { parts: [] };
  const [url, parts] = ref.split("#");
  return {
    url: url || undefined,
    parts: parts
      .split("/") // split by special character
      .filter((p) => !!p) // remove empty parts
      .map(decodeRef), // decode encoded chars
  };
}

/** Is this a ReferenceObject? (note: this is just a TypeScript helper for nodeType() below) */
export function isRef(obj: any): obj is ReferenceObject {
  return !!obj.$ref;
}

export type ParsedSimpleValue = string | number | boolean;

/**
 * For parsing CONST / ENUM single values
 * @param value - node.const or node.enum[I] for parsing
 * @param isNodeNullable  - node.nullable
 * @returns parsed value
 */
export function parseSingleSimpleValue(
  value: unknown,
  isNodeNullable = false
): ParsedSimpleValue {
  if (typeof value === "string")
    return `'${value.replace(SINGLE_QUOTE_RE, "\\'")}'`;

  if (typeof value === "number" || typeof value === "boolean") return value;

  if (typeof value === "object") return JSON.stringify(value);

  if (value === null && !isNodeNullable) return "null";

  // Edge case
  return `${value}`;
}
export function tsType(type?: string): SchemaObjectType {
  // boolean
  if (type === "boolean") {
    return "boolean";
  }

  // string
  if (
    type === "string" ||
    type === "binary" ||
    type === "byte" ||
    type === "date" ||
    type === "dateTime" ||
    type === "password"
  ) {
    return "string";
  }

  // number
  if (
    type === "integer" ||
    type === "number" ||
    type === "float" ||
    type === "double"
  ) {
    return "number";
  }

  // array
  if (type === "array") {
    return "Array";
  }
  return "unknown";
}
/** Return type of node (works for v2 or v3, as there are no conflicting types) */
type SchemaObjectType =
  | "anyOf"
  | "array"
  | "Array"
  | "boolean"
  | "const"
  | "enum"
  | "number"
  | "object"
  | "oneOf"
  | "ref"
  | "string"
  | "unknown";
export function nodeType(obj: any): SchemaObjectType {
  if (!obj || typeof obj !== "object") {
    return "unknown";
  }

  if (obj.$ref) {
    return "ref";
  }

  // const
  if (obj.const) {
    return "const";
  }

  // enum
  if (Array.isArray(obj.enum) && obj.enum.length) {
    return "enum";
  }

  // Treat any node with allOf/ anyOf/ oneOf as object
  if (
    obj.hasOwnProperty("allOf") ||
    obj.hasOwnProperty("anyOf") ||
    obj.hasOwnProperty("oneOf")
  ) {
    return "object";
  }

  // boolean
  if (obj.type === "boolean") {
    return "boolean";
  }

  // string
  if (
    obj.type === "string" ||
    obj.type === "binary" ||
    obj.type === "byte" ||
    obj.type === "date" ||
    obj.type === "dateTime" ||
    obj.type === "password"
  ) {
    return "string";
  }

  // number
  if (
    obj.type === "integer" ||
    obj.type === "number" ||
    obj.type === "float" ||
    obj.type === "double"
  ) {
    return "number";
  }

  // array
  if (obj.type === "array" || obj.items) {
    return "array";
  }

  // object
  if (
    obj.type === "object" ||
    obj.hasOwnProperty("properties") ||
    obj.hasOwnProperty("additionalProperties")
  ) {
    return "object";
  }

  // return unknown by default
  return "unknown";
}

/** Return OpenAPI version from definition */
export function swaggerVersion(definition: OpenAPI2 | OpenAPI3): 2 | 3 {
  // OpenAPI 3
  if ("openapi" in definition) {
    // OpenAPI version requires semver, therefore will always be string
    if (parseInt(definition.openapi, 10) === 3) {
      return 3;
    }
  }

  // OpenAPI 2
  if ("swagger" in definition) {
    // note: swagger 2.0 may be parsed as a number
    if (
      typeof definition.swagger === "number" &&
      Math.round(definition.swagger as number) === 2
    ) {
      return 2;
    }
    if (parseInt(definition.swagger, 10) === 2) {
      return 2;
    }
  }

  throw new Error(
    `✘  version missing from schema; specify whether this is OpenAPI v3 or v2 https://swagger.io/specification`
  );
}

/** Decode $ref (https://swagger.io/docs/specification/using-ref/#escape) */
export function decodeRef(ref: string): string {
  return ref
    .replace(ESC_0_RE, "~")
    .replace(ESC_1_RE, "/")
    .replace(DOUBLE_QUOTE_RE, '\\"');
}

/** Encode $ref (https://swagger.io/docs/specification/using-ref/#escape) */
export function encodeRef(ref: string): string {
  return ref.replace(TILDE_RE, "~0").replace(FS_RE, "~1");
}

/** Convert T into T[]; */
export function tsArrayOf(type: string): string {
  return `(${type})[]`;
}

/** Convert array of types into [T, A, B, ...] */
export function tsTupleOf(types: string[]): string {
  return `[${types.join(", ")}]`;
}

/** Convert T, U into T & U; */
export function tsIntersectionOf(types: string[]): string {
  const typesWithValues = types.filter(Boolean);

  if (!typesWithValues.length) return "undefined"; // usually allOf/anyOf with empty input - so it's undefined

  if (typesWithValues.length === 1) return typesWithValues[0]; // don’t add parentheses around one thing
  return `(${typesWithValues.join(") & (")})`;
}

/** Convert T into Partial<T> */
export function tsPartial(type: string): string {
  return `Partial<${type}>`;
}

export function tsReadonly(immutable: boolean): string {
  return immutable ? "readonly " : "";
}

/** Convert [X, Y, Z] into X | Y | Z */
export function tsUnionOf(types: Array<string | number | boolean>): string {
  if (!types.length) return "undefined"; // usually oneOf with empty input - so it's undefined

  if (types.length === 1) return `${types[0]}`; // don’t add parentheses around one thing
  return `(${types.join(") | (")})`;
}

export function replaceKeys(obj: Record<string, any>): Record<string, any> {
  if (typeof obj === "object" && obj !== undefined && obj !== null) {
    if (Array.isArray(obj)) {
      return obj.map((item) => replaceKeys(item));
    } else {
      const keyValues = Object.keys(obj).map((key) => {
        const newKey = key.replace(DOUBLE_QUOTE_RE, '\\"');
        const newValue = obj[key];
        if (typeof newValue === "object") {
          return { [newKey]: replaceKeys(newValue) };
        } else {
          return { [newKey]: newValue };
        }
      });
      return Object.assign({}, ...keyValues);
    }
  } else {
    return obj;
  }
}

// 判断是否全是中文
function isChinese(temp: string) {
  const re = /^[\u4e00-\u9fa5]+$/g;
  if (re.test(temp)) return true;
  return false;
}

/**
 *
 * 目的一：分离 ResultVO«PageVO«PageMessageVo»» 这样的形式
 * 目的而：替换中文为英文
 */
let chineseIndex = 1;
let genericityFlag = "«";
export function dealInterfaceName(interfaceName: string) {
  if (interfaceName.indexOf("«") > -1) {
    interfaceName = interfaceName.replace(/«/g, "<").replace(/»/g, ">");
  }
  return interfaceName;
}

let chineseGeneriIndex = 1;

export const sourceMapTarget = new Map<string, SourceTargetMap>();
export function transformChart(sourceStr: string, interfaceStr: string = "") {
  // 包含中文字符
  const includeChinese = /[\u4e00-\u9fa5]/g;
  // 全是中文字符
  // const allChinese = /^[\u4e00-\u9fa5]+$/g;
  // 包含括号
  const includeParentheses = /\(|\)/g;
  let target = "";
  if (includeParentheses.test(sourceStr) || includeChinese.test(sourceStr)) {
    const targetObj = sourceMapTarget.get(sourceStr);
    if (targetObj && targetObj.target) {
      // target = sourceMapTarget.get(sourceStr).target;
      target = targetObj.target;
    } else {
      target = `Custom${chineseGeneriIndex++}`;
      sourceMapTarget.set(sourceStr, {
        source: sourceStr,
        target,
        interfaceStr,
      });
    }
  }
  return target;
}
// 处理数据结构名称
export function formatDataStrucName(interName: string) {
  const reg = /((?!\<).*?)\<((?!\>).*?)\>$/;
  const result = interName.match(reg);
  if (result) {
    const subGroup = result[1];
    const subGroupGeneric = result[2];
    interName = `${transformChart(subGroup)}<${formatDataStrucName(
      subGroupGeneric
    )}>`;
  } else {
    // 没有泛型
    interName = transformChart(interName);
  }
  return interName;
}
// 是否包含类似的泛型的结构
export function isGeneric(name: string) {
  const reg = /((?!\«).*?)\«((?!\»).*?)\»$/;
  return reg.test(name);
}
export function createGenericInterfaceName(name: string) {
  const reg = /((?!\«).*?)\«((?!\»).*?)\»$/;

  const nameArr = name.match(reg);
  if (!nameArr) return name;
  return `${nameArr[1]}<T>`;
}
export function isReferenObj(items?: SchemaObject | ReferenceObject) {
  return items && !!(items as ReferenceObject).$ref;
}
// export function parseRefPartsName(refPartsName: string) {
//   // 生成数据结构
//   function parseGeneric(name: string): RefParts {
//     const reg = /((?!\«).*?)\«((?!\»).*?)\»$/;
//     const nameRegArr = name.match(reg);
//     if (nameRegArr) {
//       const childrenAim = [];
//       childrenAim.push(parseGeneric(nameRegArr[2]));
//       return {
//         name: nameRegArr[1],
//         children: childrenAim,
//       };
//     } else {
//       return { name: name, children: [] };
//     }
//   }

//   const result = parseGeneric(refPartsName);
//   console.dir(result);
//   console.log(result.children[0].children);

//   return result;
// }
