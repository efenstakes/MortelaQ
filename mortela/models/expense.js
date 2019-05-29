// include external libraries
const Sequelize = require('sequelize')

// include internal libs/modules
const db = require('../config/database')



const Expense = db.define('expense', {
    added_on: {
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
    description: {
        type: Sequelize.STRING
    },
    manager_id: {
        type: Sequelize.INTEGER
    }
})


// create the table
// Expense.sync({ force: true })

// export the model
module.exports = Expense