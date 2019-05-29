// include external libraries
const Sequelize = require('sequelize')


// include internal libs/modules
const db = require('../config/database')

const Item = db.define('item', {
    name: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    meal: {
        type: Sequelize.ENUM,
        values: [ 'BREAKFAST', 'LUNCH', 'SUPPER', 'ANY' ]
    },
    cost: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})


// Item.sync({ force: true })

// export our model
module.exports = Item