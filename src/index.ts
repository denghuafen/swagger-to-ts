import fs from "fs";
import axios from "axios";
// import path from "path";
// import openapiTS from "openapi-typescript";
// import { generateApi } from "swagger-typescript-api";
import writeTsFile from "./toTsMy";

const apiDocsArr = [
  {
    link: "http://wenwo-cloud-adaptor-biz-domain-platform-dev.wenwo.cn/doc.html#/default/%E7%88%B1%E9%97%AE%E5%90%8E%E5%8F%B0%E7%A4%BE%E5%8C%BA%E7%99%BD%E5%90%8D%E5%8D%95/addWhiteAccountUsingPOST",
    api: "http://wenwo-cloud-adaptor-biz-domain-platform-dev.wenwo.cn/v2/api-docs",
  },
  {
    link: " http://10.118.1.132:53032/#/controller/excel%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3/downloadExcelTemplateUsingGET",
    api: "http://10.118.1.132:53032/v2/api-docs?group=controller",
  },
];
(async () => {
  try {
    const downloadedFileName = "project-openapi.json";
    const { data } = await axios.get(apiDocsArr[0].api, {
      headers: {},
      responseType: "text",
    });

    // const path = "/biz/community/pageFunds";
    const path = "/biz/comtywhiteaccount/addWhiteAccount";
    // const path = "/biz/community/getDetail";
    // const path = "/biz/application/findPostBarList";
    // const path = "/biz/customer/abdUser";
    // const path = "/biz/comtywhiteaccount/searchAccountByPhone";
    // const path = "";
    // console.log(typeof data);
    const jsonStr = isJson(data) ? data : JSON.stringify(data);
    fs.writeFileSync(`./${downloadedFileName}`, jsonStr);
    // const path = "/work/weixin/api/v1/livecode/channel/excel/batchImport";
    writeTsFile(path);
  } catch (err) {
    console.error("Error:", err);
  }
})();

function isJson(aim: unknown) {
  if (typeof aim === "string") {
    try {
      JSON.parse(aim);
      return true;
    } catch (error) {
      return;
    }
  } else {
    return false;
  }
}
