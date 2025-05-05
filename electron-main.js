const path = require('path');
const { app, BrowserWindow } = require('electron');
const { execFile } = require('child_process');


let win;
let apiProcess = null; // Declare globally

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // If you need nodeIntegration
        },
    });

    let indexPath;
    if (app.isPackaged) {
        indexPath = path.join(__dirname, 'index.html');
    } else {
        indexPath = path.join(__dirname, 'dist', 'pos-app', 'index.html');
    }

    console.log("Index Path: ", indexPath);

    win.loadFile(indexPath)
        .catch((error) => {
            console.error('Error loading index.html:', error);
        });

    win.on('closed', () => {
        win = null;
    });
}

function startApiServer() {
  const apiExePath = 'D:/pos_sytem/api-publish/ClientAppPOSWebAPI.exe';

  apiProcess = execFile(apiExePath, {
      cwd: path.dirname(apiExePath), // 👈 Set working directory
      env: {
          ...process.env,             // 👈 Keep existing environment
          ASPNETCORE_ENVIRONMENT: 'Development' // 👈 Force API into Development mode
      }
  }, (error, stdout, stderr) => {
      if (error) {
          console.error(`API Error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.error(`API stderr: ${stderr}`);
          return;
      }
      console.log(`API stdout: ${stdout}`);
  });
}


function stopApiServer() {
    if (apiProcess) {
        console.log("Stopping API server...");
        apiProcess.kill(); // Kill the server process
    }
}

app.whenReady().then(() => {
  // 👇 Add this line to ignore SSL errors (for development)
    app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
    startApiServer();
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', () => {
    stopApiServer();
});
