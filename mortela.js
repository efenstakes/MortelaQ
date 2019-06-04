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
    // win.loadFile('dist/mortela-q/index.html')
    win.loadURL('http://localhost:4200')

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
            console.log('user ', user)
            event.returnValue = user
        })
        .catch((error)=> {
          event.returnValue = null
        })
})

// log out
ipcMain.on('log-out', (event, args) => {
    console.log('log out a users')
    event.returnValue = 'log in'
})


// add staff
ipcMain.on('add-staff', (event, args) => {
    console.log('add staff ', args)
    
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { saved: false }
        return
    }

    Models.User.add(args.user)
               .then(usr=> {
                    console.log('added ', usr)
                   if( usr && usr._id ) {
                        event.returnValue = { saved: true }
                   } else{
                        event.returnValue = { saved: false }
                   }
               })
               .catch((error)=> {
                    event.returnValue = { saved: true }
               })
})

// delete staff
ipcMain.on('delete-staff', (event, args) => {
    console.log('delete staff ', args)

        
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { deleted: false }
        return
    }

    Models.User.delete(args.id)
               .then((res)=> {
                   console.log('res', res)
                   event.returnValue = { deleted: true }
               })
               .catch((error)=> {
                    event.returnValue = { deleted: false }
               })
})

// edit staff
ipcMain.on('update-staff', (event, args) => {
    console.log('edit staff ', args)
    console.log('manrole', args.manager.role)

    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { updated: false }
        return
    }

    console.log(Models.User.update(args.user))
    Models.User.update(args.user)
               .then(usr=> {
                    console.log('updated ', usr)
                   if( usr == 1 ) {
                        event.returnValue = { updated: true }
                   } else{
                        event.returnValue = { updated: false }
                   }
               })
               .catch((error)=> {
                    event.returnValue = { updated: true }
               })
})


// get all staff
ipcMain.on('get-all-staff', (event, args) => {
    console.log('all staff ', args)
    Models.User.all()
                .then((usrs)=> {
                    event.returnValue = usrs
                })
                .catch((error)=> {
                    event.returnValue = []
                })
})


// edit user
ipcMain.on('update-user', (event, args) => {
    console.log('edit user ', args)
    event.returnValue = 'edit user now'
})


// edit user password
ipcMain.on('update-user-password', (event, args) => {
    console.log('edit user password', args)
    event.returnValue = 'edit user now'
})




// inventory

// add 
ipcMain.on('add-inventory', (event, args) => {
    console.log('add-inventory', args)

    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { saved: false }
        return
    }

    Models.Inventory.add(args.inventory)
               .then((inventry)=> {
                    console.log('added ', inventry)
                   if( inventry && inventry._id ) {
                        event.returnValue = { saved: true }
                   } else{
                        event.returnValue = { saved: false }
                   }
               })
               .catch((error)=> {
                    event.returnValue = { saved: true }
               })
})


// delete 
ipcMain.on('delete-inventory', (event, args) => {
    console.log('delete-inventory', args)
    
        
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { deleted: false }
        return
    }

    Models.Inventory.delete(args.id)
               .then((res)=> {
                   console.log('res', res)
                   event.returnValue = { deleted: true }
               })
               .catch((error)=> {
                    event.returnValue = { deleted: false }
               })

})


// all 
ipcMain.on('all-inventory', (event, args) => {
    console.log('all-inventory', args)
    
    Models.Inventory.all()
                    .then((inventory)=> {
                        event.returnValue = inventory
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})



// all_for_day 
ipcMain.on('all-inventory-for-day', (event, args) => {
    console.log('all_for_day-inventory', args)
    event.returnValue = 'all_for_day-inventory'
})




// expense

// add 
ipcMain.on('add-expense', (event, args) => {
    console.log('add-expense', args)

    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { saved: false }
        return
    }

    Models.Expense.add(args.expense)
               .then((expense)=> {
                    console.log('added ', expense)
                   if( expense && expense._id ) {
                        event.returnValue = { saved: true }
                   } else{
                        event.returnValue = { saved: false }
                   }
               })
               .catch((error)=> {
                    event.returnValue = { saved: true }
               })
})


// delete 
ipcMain.on('delete-expense', (event, args) => {
    console.log('delete-expense', args)
           
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { deleted: false }
        return
    }

    Models.Expense.delete(args.id)
                    .then((res)=> {
                        console.log('res', res)
                        event.returnValue = { deleted: true }
                    })
                    .catch((error)=> {
                            event.returnValue = { deleted: false }
                    })
})


// all 
ipcMain.on('all-expenses', (event, args) => {
    console.log('all-expenses', args)
      
    Models.Expense.all()
                    .then((all)=> {
                        event.returnValue = all
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})



// all_for_day 
ipcMain.on('all-expense-for-day', (event, args) => {
    console.log('all_for_day-expense', args)
    event.returnValue = 'all_for_day-expense'
})



// penalty

// add 
ipcMain.on('add-penalty', (event, args) => {
    console.log('add-penalty', args)

    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { saved: false }
        return
    }

    Models.Penalty.add(args.penalty)
                    .then((penalty)=> {
                            console.log('added ', penalty)
                        if( penalty && penalty._id ) {
                                event.returnValue = { saved: true }
                        } else{
                                event.returnValue = { saved: false }
                        }
                    })
                    .catch((error)=> {
                            event.returnValue = { saved: true }
                    })
})


// delete 
ipcMain.on('delete-penalty', (event, args) => {
    console.log('delete-penalty', args)
    
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { deleted: false }
        return
    }
    Models.Penalty.delete(args.id)
                    .then((res)=> {
                        console.log('res', res)
                        event.returnValue = { deleted: true }
                    })
                    .catch((error)=> {
                            event.returnValue = { deleted: false }
                    })
})


// all 
ipcMain.on('all-penalty', (event, args) => {
    console.log('all-penalty', args)
    
    Models.Penalty.all()
                    .then((all)=> {
                        event.returnValue = all
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})



// all_for_day 
ipcMain.on('all-penalty-for-day', (event, args) => {
    console.log('all_for_day-penalty', args)
    event.returnValue = 'all_for_day-penalty'
})





// product

// add 
ipcMain.on('add-product', (event, args) => {
    console.log('add-product', args)
    
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { saved: false }
        return
    }

    Models.Product.add(args.product)
                    .then((product)=> {
                        console.log('added ', product)
                        if( product && product._id ) {
                            event.returnValue = { saved: true }
                        } else{
                            event.returnValue = { saved: false }
                        }
                    })
                    .catch((error)=> { console.log('error', error)
                        event.returnValue = { saved: false }
                    })
})


// delete 
ipcMain.on('delete-product', (event, args) => {
    console.log('delete-product', args)
   
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { deleted: false }
        return
    }
    Models.Product.delete(args.id)
                    .then((res)=> {
                        console.log('res', res)
                        event.returnValue = { deleted: true }
                    })
                    .catch((error)=> {
                            event.returnValue = { deleted: false }
                    })
})

// edit 
ipcMain.on('edit-product', (event, args) => {
    console.log('edit-product', args)
    
    if( args.manager.role != 'MANAGER' && args.manager.role != 'ADMIN' ) {
        event.returnValue = { updated: false }
        return
    }

    Models.Product.update(args.product)
                    .then((product)=> {
                        console.log('edit ', product)
                        if( product ) {
                            event.returnValue = { updated: true }
                        } else{
                            event.returnValue = { updated: false }
                        }
                    })
                    .catch((error)=> { console.log('error', error)
                        event.returnValue = { updated: false }
                    })
})


// edit quantity
ipcMain.on('edit-product-quantity', (event, args) => {
    console.log('edit-product-quantity', args)

    Models.Product.update_quantity(args.product)
                    .then((product)=> {
                        console.log('edit ', product)
                        if( product ) {
                            event.returnValue = { updated: true }
                        } else{
                            event.returnValue = { updated: false }
                        }
                    })
                    .catch((error)=> { console.log('error', error)
                        event.returnValue = { updated: false }
                    })
})


// all 
ipcMain.on('all-products', (event, args) => {
    console.log('all-products', args)
    
    Models.Product.all()
                    .then((all)=> {
                        event.returnValue = all
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})



// all_for_day 
ipcMain.on('all-product-for-day', (event, args) => {
    console.log('product-product', args)
    
    Models.Product.all()
                    .then((all)=> {
                        event.returnValue = all
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})





// orders

// add 
ipcMain.on('add-order', (event, args) => {
    console.log('add-order', args)


    Models.Order.add(args.order)
                    .then((order)=> {
                        console.log('added ', order)
                        if( order && order._id ) {
                            event.returnValue = { saved: true }
                        } else{
                            event.returnValue = { saved: false }
                        }
                    })
                    .catch((error)=> { console.log('error', error)
                        event.returnValue = { saved: false }
                    })
})


// delete 
ipcMain.on('delete-order', (event, args) => {
    console.log('delete-order', args)
   
    Models.Order.delete(args.id)
                    .then((res)=> {
                        console.log('res', res)
                        event.returnValue = { deleted: true }
                    })
                    .catch((error)=> {
                            event.returnValue = { deleted: false }
                    })
})

// edit 
ipcMain.on('edit-order', (event, args) => {
    console.log('edit-order', args)

    Models.Order.update(args.order)
                    .then((order)=> {
                        console.log('edit ', order)
                        if( order ) {
                            event.returnValue = { updated: true }
                        } else{
                            event.returnValue = { updated: false }
                        }
                    })
                    .catch((error)=> { console.log('error', error)
                        event.returnValue = { updated: false }
                    })
})


// edit 
ipcMain.on('clear-order', (event, args) => {
    console.log('clear-order', args)

    Models.Order.clear(args.order)
                    .then((order)=> {
                        console.log('edit ', order)
                        if( order ) {
                            event.returnValue = { updated: true }
                        } else{
                            event.returnValue = { updated: false }
                        }
                    })
                    .catch((error)=> { console.log('error', error)
                        event.returnValue = { updated: false }
                    })
})


// all 
ipcMain.on('all-order', (event, args) => {
    console.log('all-order', args)
    
    Models.Order.all()
                    .then((all)=> {
                        event.returnValue = all
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})



// all_for_day 
ipcMain.on('all-order-for-day', (event, args) => {
    console.log('order-order', args)
    
    Models.Order.all()
                    .then((all)=> {
                        event.returnValue = all
                    })
                    .catch((error)=> {
                        event.returnValue = []
                    })
})
