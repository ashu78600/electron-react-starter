const { ipcRenderer, contextBridge } = require("electron");
const os = require("os");

contextBridge.exposeInMainWorld("api", {
  cpuCount: os.cpus().length,
});
