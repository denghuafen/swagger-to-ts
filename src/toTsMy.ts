import fs from "fs";
import apiTS from "./mp-openapi-ts/toTsByPath";
import prettier from "prettier";
import parserTypescript from "prettier/parser-typescript";
const schema = fs.readFileSync("project-openapi.json", "utf8"); // must be OpenAPI JSON
(function () {
  // const path = "/biz/comtywhiteaccount/addWhiteAccount";
  // const path = "/biz/community/pageFunds";
  // const path = "/biz/customer/abdUser";
  // const path = "/biz/comtywhiteaccount/searchAccountByPhone";
  const path = "";
  const outputStr = apiTS(schema, path);
  const { other, output } = outputStr;

  fs.writeFileSync("output/test-my.ts", output + other);
})();

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
