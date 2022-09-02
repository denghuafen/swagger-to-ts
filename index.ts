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
      // http://wenwo-cloud-adaptor-biz-domain-platform-dev.wenwo.cn/doc.html#/default/%E7%88%B1%E9%97%AE%E5%90%8E%E5%8F%B0%E7%A4%BE%E5%8C%BA%E7%99%BD%E5%90%8D%E5%8D%95/addWhiteAccountUsingPOST
      "http://wenwo-cloud-adaptor-biz-domain-platform-dev.wenwo.cn/v2/api-docs",
      // "http://10.97.59.93:55001/v2/api-docs",
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
