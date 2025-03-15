const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,  // Allowing Node.js integration
            contextIsolation: false, // To allow access to Node.js
        }
    });

    win.loadFile('index.html');  // Load the index.html file

    win.on('closed', () => {
        win = null;
    });
}

app.whenReady().then(() => {
    createWindow();
    Menu.setApplicationMenu(null);  // This removes the default menu bar
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
