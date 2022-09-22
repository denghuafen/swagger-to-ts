import CircularJSON from "circular-json";
export function isJson(aim: unknown) {
  if (typeof aim === "string") {
    try {
      CircularJSON.parse(aim);
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
}
