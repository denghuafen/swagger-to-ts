/**
 *
 * 将字符串的typescript 输出成ts文件
 *
 *
 */

import fs from "fs";
// import prettier from "prettier";
// import parserTypescript from "prettier/parser-typescript";
const key = "request";
const value = "string";
const intgerStr = `interface ITest {\n ${key}?:${value};\n}`;
fs.writeFileSync("inter.ts", intgerStr);

// 3. Prettify
// let prettierOptions: prettier.Options = {
//   parser: "typescript",
//   plugins: [parserTypescript],
// };
