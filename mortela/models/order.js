// include external libraries
const Sequelize = require('sequelize')

// include internal libs/modules
const db = require('../config/database')



const Order = db.define('order', {
    made_on: {
        type: Sequelize.DATE, 
        defaultValue: new Date()
    },
    table_no: {
        type: Sequelize.TEXT
    },
    is_cleared: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    is_special: { // if it was by an employee
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    type: { 
        type: Sequelize.ENUM,
        values: [ 'TAKE_AWAY', 'WALK_IN' ]
    },
    cashier_id: {
        type: Sequelize.INTEGER
    }
})


// create the table
// Order.sync({ force: true })

// export the model
module.exports = Order