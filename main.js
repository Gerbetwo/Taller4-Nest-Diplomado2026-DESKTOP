const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        height: 1280,
        width: 720,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
        title: 'My App',
    });

    win.setTitle('My App');
    win.loadFile(path.join(__dirname, 'client-dist/index.html'));
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

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