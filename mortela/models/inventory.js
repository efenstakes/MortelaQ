// include external libraries
const Sequelize = require('sequelize')

// include internal libs/modules
const db = require('../config/database')



const Inventory = db.define('inventory', {
    made_on: {
        type: Sequelize.DATE, 
        defaultValue: new Date()
    },
    item: {
        type: Sequelize.TEXT,
        allowNull: false 
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    manager_id: {
        type: Sequelize.INTEGER
    }
})


// create the table
// Inventory.sync({ force: true })

// export the model
module.exports = Inventory