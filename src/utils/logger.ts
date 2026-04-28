const meta = import.meta as any;
const isDev = meta.env?.MODE === "development";

//-----------------------------------------------------------
export const logger = {
  sep: () => loggerF("info", `-----------------------------------------------`),
  log: (msg: string, obj?: any) => loggerF("white", msg, obj),
  info: (msg: string, obj?: any) => loggerF("lightgreen", msg, obj),
  trace: (msg: string, obj?: any) => loggerF("paleturquoise", msg, obj),
  debug: (msg: string, obj?: any) => loggerF("yellow", msg, obj),
  handle: (msg: string, obj?: any) => loggerF("orange", "> " + msg, obj),
  fetch: (msg: string, from: string) => {
    if (isDev) console.log(`<< fetch [${msg}]: %c${from}`, `color:lightblue;`);
  },
};
//-----------------------------------------------------------
function loggerF(color: string, msg: string, obj?: any) {
  if (isDev) console.log(`%c${msg}`, `color:${color};`, obj ? obj : "");
}
//-----------------------------------------------------------
