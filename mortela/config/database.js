// include external libraries
const Sequelize = require('sequelize')
const path = require('path')

// include internal libs/modules



const db = new Sequelize({
    dialect: 'sqlite',
    storage: './app/data/mortela-q.db',
    define: {
        timestamps: false
    }
})


// test connection
db.authenticate()
  .then(()=> console.log('connected to db'))
  .catch((error)=> console.log('Error ', error) )


// export our database connection
module.exports = db  
