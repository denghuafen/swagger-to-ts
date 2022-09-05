import fs from "fs";
import axios from "axios";
// import path from "path";
// import openapiTS from "openapi-typescript";
// import { generateApi } from "swagger-typescript-api";
import writeTsFile from "./toTsMy";
(async () => {
  try {
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
    // const path = "/biz/community/pageFunds";
    // const path = "/biz/comtywhiteaccount/addWhiteAccount";
    const path = "/biz/community/getDetail";
    // const path = "/biz/application/findPostBarList";
    // const path = "/biz/customer/abdUser";
    // const path = "/biz/comtywhiteaccount/searchAccountByPhone";
    // const path = "";
    fs.writeFileSync(`./${downloadedFileName}`, JSON.stringify(data));
    writeTsFile(path);
  } catch (err) {
    console.error("Error:", err);
  }
})();
