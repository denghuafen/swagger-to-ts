import apiTS, { transformSchemaObj } from "../index";
import fs from "fs";
import path from "path";
import { SchemaObject } from "../types";
import { formatDataStrucName, parseRefPartsName, sourceMapTarget } from "../utils";
// (function () {
//   const schema = fs.readFileSync(
//     path.resolve(__dirname, "../../../project-openapi.json"),
//     "utf8"
//   );
//   apiTS(schema);
// })();

// const schema: SchemaObject = {
//   type: "array",
//   items: {
//     // originalRef: "GetSystemMenuVO",
//     $ref: "#/definitions/GetSystemMenuVO",
//   },
// };
// const output = transformSchemaObj(schema);
// console.log(output);

let aim = "ResultVO«List«表(t_patient_content_operation_channel_activity)实体类VO»»";
// let aim = "ResultVO«List«表(t_patient_content_operation_channel_activity)实体类VO«实体类VB»»»";
// let aim = "ResultVO";
// let aim = "ResultVO«表(t_patient_content_operation_channel_carrier)实体类VO»";
// const result = formatDataStrucName(aim);
parseRefPartsName(aim);
// console.log("ddd",result);
