export function isJson(aim: unknown) {
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
