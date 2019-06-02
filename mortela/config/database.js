// include external libraries
const Datastore = require('nedb-promise')
const path = require('path')

// include internal libs/modules


// load our database collections
let User = new Datastore({ filename: './mortela/data/users.qdb', autoload: true })
let Product = new Datastore({ filename: './mortela/data/products.qdb', autoload: true })
let Order = new Datastore({ filename: './mortela/data/orders.qdb', autoload: true })
let Inventory = new Datastore({ filename: './mortela/data/inventory.qdb', autoload: true })
let Expense = new Datastore({ filename: './mortela/data/espenses.qdb', autoload: true })
let Penalty = new Datastore({ filename: './mortela/data/penalties.qdb', autoload: true })


// 
const db = {
    User,
    Product,
    Order,
    Inventory,
    Expense,
    Penalty
}


// export our database connection
module.exports = db