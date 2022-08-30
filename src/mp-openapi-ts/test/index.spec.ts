import apiTS, { transformSchemaObj } from "../index";
import fs from "fs";
import path from "path";
import { SchemaObject } from "../types";
// (function () {
//   const schema = fs.readFileSync(
//     path.resolve(__dirname, "../../../project-openapi.json"),
//     "utf8"
//   );
//   apiTS(schema);
// })();

const schema: SchemaObject = {
  type: "array",
  items: {
    // originalRef: "GetSystemMenuVO",
    $ref: "#/definitions/GetSystemMenuVO",
  },
};
const output = transformSchemaObj(schema);
console.log(output);



