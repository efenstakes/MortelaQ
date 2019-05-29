// include external libraries
const Sequelize = require('sequelize')
const db = require('../config/database')


// include internal libs/modules



const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priviledge: {
        type: Sequelize.ENUM, 
        values: [ 'CASHIER', 'MANAGER', 'ADMIN' ],
        defaultValue: 'CASHIER'
    },
    salary: {
        type: Sequelize.BIGINT, 
        defaultValue: 0.0
    },
    added_on: {
        type: Sequelize.DATE, 
        defaultValue: new Date()
    }
})


// create the table
// User.sync({ force: true }).then(()=> {})

// export our model
module.exports = User 