import fs from "fs";
// 这样导入一直报错。。。
// import openapiTS from "openapi-typescript";
const schema = fs.readFileSync("project-openapi.json", "utf8"); // must be OpenAPI JSON

(async () => {
  const openapiTS = await (eval('import("openapi-typescript")') as Promise<
    typeof import("openapi-typescript")
  >);
  const output = await openapiTS.default(JSON.parse(schema));

  fs.writeFileSync("output/result-other.ts", output);
})();



