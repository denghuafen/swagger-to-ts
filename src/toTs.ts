import fs from "fs";
// 这样导入一直报错。。。
// import openapiTS from "openapi-typescript";
// import openapiTS from "../oepnapi-my-ts/index";
const schema = fs.readFileSync("project-openapi.json", "utf8"); // must be OpenAPI JSON

(async () => {
  const openapiTS = await (eval('import("openapi-typescript")') as Promise<
    typeof import("openapi-typescript")
  >);
  const output = await openapiTS.default(JSON.parse(schema));

  fs.writeFileSync("test.ts", output);
  console.log(output, "...ee");
})();
// (async function () {
//   const output = await openapiTS(JSON.parse(schema));
//   console.log(output, "..output");
// })();
