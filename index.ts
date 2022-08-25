import fs from "fs";
import axios from "axios";
// import path from "path";
import openapiTS from "openapi-typescript";
// import { generateApi } from "swagger-typescript-api";
(async () => {
  try {
    // const directory = "./my-api";
    // const generatedTypeFileName = "generatedTypes.ts";
    const downloadedFileName = "project-openapi.json";

    const { data } = await axios.get(
      "http://wenwo-cloud-adaptor-biz-domain-platform-dev.wenwo.cn/v2/api-docs",
      {
        headers: {},
        responseType: "text",
      }
    );

    // console.error(data, "..data");
    fs.writeFileSync(`./${downloadedFileName}`, JSON.stringify(data));
    // const schema = await fs.promises.readFile("project-openapi.json", "utf8"); // must be OpenAPI JSON
    // const output = await openapiTS(JSON.parse(schema));
    // console.error(output,"...output.");
    
    // const generatedTypes = await generateApi({
    //   name: `${generatedTypeFileName}`,
    //   input: path.resolve(directory, downloadedFileName),
    //   generateClient: false,
    // });

    // fs.writeFileSync(`${directory}/${generatedTypeFileName}`, generatedTypes);
  } catch (err) {
    console.error("Error:", err);
  }
})();
