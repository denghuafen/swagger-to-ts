import fs from "fs";
import openapiTS from "openapi-typescript";
(async function () {
  const schema = await fs.promises.readFile("project-openapi.json", "utf8"); // must be OpenAPI JSON
//   console.error(schema,"..schema");
//   console.error(JSON.parse(schema), "...JSON.parse(schema)");
  
  const output = await openapiTS(JSON.parse(schema));
//   console.error(output, "...output.");
})();
