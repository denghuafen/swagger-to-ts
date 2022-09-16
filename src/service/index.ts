import express from "express";
import portfinder from "portfinder";
import path from "path";
import bodyParser from "body-parser";
import axios from "axios";
import { isJson } from "../utils/validate";
import writeTsFile from "../toTsMy";
const app = express();

// 拦截所有请求
app.use(bodyParser.json());
//extended:false 方法内部使用querystring模块处理请求参数的格式
//extended:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));

// 使用静态资源服务器
app.use(express.static(path.resolve(__dirname, "../../public")));

// app.get("/", (req, res) => {
// //   console.log(req, res);
//   res.send("hello world111");
// });
app.post("/getApiData", (req, res) => {
  console.log(req.params, req.body, "..e");
  const apiUrl = req.body.url as string || "";
  axios
    .get(apiUrl, {
      headers: {},
      responseType: "text",
    })
    .then((data: any) => {
      const isJsonData = isJson(data);
      //   console.error(isJsonData);
      //   console.log(data.data.paths, "..data");
      const pathsArr = Object.keys(data.data.paths);

      res.send(JSON.stringify(pathsArr));
    })
    .catch((err) => {
      console.log(err);

      res.send(err);
    });
  // res.send("hgell");
});
app.post("/getTs", (req, res) => {
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
