import fs from "fs";
import apiTS from "./mp-openapi-ts";
const schema = fs.readFileSync("project-openapi.json", "utf8"); // must be OpenAPI JSON
(function () {
  const outputStr = apiTS(schema);
  fs.writeFileSync("test-my.ts", outputStr);
//   console.log(outputStr);
})();
