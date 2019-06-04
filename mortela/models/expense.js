// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Expense = Models.Expense



// add an expense
exports.add = async(expense) => {
    return Expense.insert({
        item: expense.item,
        cost: expense.cost,
        description: expense.description,
        manager_id: expense.manager_id,
        added_on: new Date()
    })
}

// delete an expense
exports.delete = async(id) => {
    return await Expense.remove({ _id: id })
}


// update an expense
exports.update = async(expense) => {
    return await Expense.update({ _id: expense._id }, {
        $set: {
            item: expense.item,
            cost: expense.cost,
            description: expense.description,
            manager_id: expense.manager_id
        }
    })
}


// get an expense details by id 
exports.details = async(id) => {
    return await Expense.findOne({ _id: id })
}

// get all inventories  
exports.all = async() => {
    return await Expense.find({})
}