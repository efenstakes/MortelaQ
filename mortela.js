// include external libraries
const { app, BrowserWindow, ipcMain } = require('electron')


// include internal libraries
const Models = require('./mortela/models')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('dist/mortela-q/index.html')

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})




// handle events from angular

// user

// log in
ipcMain.on('log-in', (event, args) => {
    console.log('login a users with args', args)
        // return
        // event.returnValue =  Controllers.User.account_exists(args)   // 'log in'
    Models.User.account_exists(args)
        .then((user) => {
            event.returnValue = user
        })
})

// log out
ipcMain.on('log-out', (event, args) => {
    console.log('log out a users')
    event.returnValue = 'log in'
})


// add staff
ipcMain.on('add-staff', (event, args) => {
    console.log('add staff ')
    event.returnValue = 'add staff now'
})

// delete staff
ipcMain.on('delete-staff', (event, args) => {
    console.log('delete staff ')
    event.returnValue = 'delete staff now'
})

// edit staff
ipcMain.on('update-staff', (event, args) => {
    console.log('edit staff ')
    event.returnValue = 'edit staff now'
})


// edit user
ipcMain.on('update-user', (event, args) => {
    console.log('edit user ')
    event.returnValue = 'edit user now'
})


// edit user password
ipcMain.on('update-user-password', (event, args) => {
    console.log('edit user password')
    event.returnValue = 'edit user now'
})