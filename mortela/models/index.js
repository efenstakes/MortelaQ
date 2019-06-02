// import external libraries/modules

// import internal libraries/modules
const Expense = require('./expense')
const Inventory = require('./inventory')
const Product = require('./product')
const Order = require('./order')
const User = require('./user')
const Penalty = require('./penalty')


// export the controllers
module.exports = {
    Expense,
    Inventory,
    Product,
    Order,
    User,
    Penalty
}