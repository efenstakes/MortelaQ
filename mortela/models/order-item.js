// include external libraries
const Sequelize = require('sequelize')

// include internal libs/modules
const db = require('../config/database')



const OrderItem = db.define('order-item', {
    order_id: {
        type: Sequelize.INTEGER
    },
    item_id: {
        type: Sequelize.INTEGER
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})


// create the table
// OrderItem.sync({ force: true })

// export the model
module.exports = OrderItem