import fs from "fs";
import apiTS from "./mp-openapi-ts/index";
import prettier from "prettier";
import parserTypescript from "prettier/parser-typescript";
import pathObj from "path";
// const jsonfile = require('jsonfile');
// import jsonfile from "jsonfile";
// (function () {

// })();

export default function writeTsFile(path?: string) {
  // console.error("hello");
  // const schema = jsonfile.readFileSync("project-openapi.json");
  const schema = fs.readFileSync(pathObj.resolve(__dirname,"../project-openapi.json"), "utf8"); // must be OpenAPI JSON
  const outputStr = apiTS(schema, path);
  const { other, output } = outputStr;
  // prettierStr(output + other)
  fs.writeFileSync(pathObj.resolve(__dirname,"../dist/test-my.ts"), prettierStr(output + other));
  return prettierStr(output + other);
}

function prettierStr(output: string) {
  let prettierOptions: prettier.Options = {
    parser: "typescript",
    plugins: [parserTypescript],
  };
  // if (options && options.prettierConfig) {
  //   try {
  //     const prettierConfigFile = path.resolve(process.cwd(), options.prettierConfig);
  //     await fs.promises.access(prettierConfigFile, fs.constants.F_OK);
  //     const userOptions = await prettier.resolveConfig(prettierConfigFile);
  //     prettierOptions = {
  //       ...(userOptions || {}),
  //       ...prettierOptions,
  //       plugins: [...(prettierOptions.plugins as prettier.Plugin[]), ...((userOptions && userOptions.plugins) || [])],
  //     };
  //   } catch (err) {
  //     console.error(`❌ ${err}`);
  //     process.exit(1);
  //   }
  // }
  return prettier.format(output, prettierOptions);
}
