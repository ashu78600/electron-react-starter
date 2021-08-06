const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(path.resolve(__dirname, "public", "index.html"));
});
