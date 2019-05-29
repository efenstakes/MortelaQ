// include external libraries


// include internal libraries/modules
const Expense = require('../models/expense')



// add an expense
exports.add = async (expense) => {
    return Expense.create({
                item: expense.item, cost: expense.cost, description: expense.description,  
                manager_id: expense.manager_id
           })
}

// delete an expense
exports.delete = async (id) => {
    return await Expense.destroy({ where: { id: id } })
}


// update an expense
exports.update = async (expense) => {
    return await Expense.update(
                {
                    item: expense.item, cost: expense.cost, 
                    description: expense.description,  
                    manager_id: expense.manager_id
                },
                { where: { id: expense.id } }
           )
}


// get an expense details by id 
exports.details = async (id) => {
  return await Expense.findOne({ where: { id: id } })
}

// get all inventories  
exports.all = async () => {
    return await Expense.findAll({ raw: true })
}