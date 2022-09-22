import express from "express";
import portfinder from "portfinder";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import axios from "axios";
import { isJson } from "../utils/validate";
import writeTsFile from "../toTsMy";
import CircularJSON from "circular-json";
const app = express();
const downloadedFileName = "project-openapi.json";
const baseUrl = "https://test.health.sina.cn";
// 拦截所有请求
app.use(bodyParser.json());
//extended:false 方法内部使用querystring模块处理请求参数的格式
//extended:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));

// 使用静态资源服务器
app.use(express.static(path.resolve(__dirname, "../../public")));

// 拦截器
app.all("/*", async (req, response, next) => {
  try {
    const { path, method, query, body } = req;
    if (/\my-ts/.test(path)) {
      console.log("走的自己的服务");
      next();
    } else {
      const axiosConfig = {
        url: path,
        method,
        baseURL: baseUrl,
        data: body,
        params: query,
      };
      const result = await axios(path, axiosConfig);
      response.send(result.data);
    }
  } catch (error) {
    console.error(error,"error...");
  }
  // const reqPath = req.path;
  // const reqUrl = req.url;
  // console.log("拦截器。。",reqPath,reqUrl);
});
app.post("/my-ts/getApiData", (req, res) => {
  console.log(req.params, req.body, "..e");
  const apiUrl = (req.body.url as string) || "";
  axios
    .get(apiUrl, {
      headers: {},
      responseType: "text",
    })
    .then((result: any) => {
      const data = result.data;
      const pathsArr = Object.keys(data.paths);
      res.send(JSON.stringify(pathsArr));
      console.log("执行。。。");
      const isJsonData = isJson(data);
      const jsonStr =  isJsonData ? data : CircularJSON.stringify(data);
      fs.writeFileSync(path.resolve(__dirname,`../../${downloadedFileName}`), jsonStr);
    })
    .catch((err) => {
      console.log(err);

      res.send(err);
    });
  // res.send("hgell");
});
app.post("/my-ts/getTs", (req, res) => {
  // console.log(req.params, req.body);
  const { path } = req.body;
  // const path = "/biz/account/role/del";

  const result = writeTsFile(path);
  // console.log(result, "..result");

  res.send(result);
});
startServe();

function startServe() {
  portfinder
    .getPortPromise()
    .then((port) => {
      app.listen(port, () => {
        console.log(`server listening on port ${port}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}


