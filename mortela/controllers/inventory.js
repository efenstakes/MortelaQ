// include external libraries


// include internal libraries/modules
const Inventory = require('../models/inventory')



// add an inventory
exports.add = async (inventory) => {
    return Inventory.create({
                name: inventory.name, cost: inventory.cost, quantity: inventory.quantity,  
                meal: inventory.meal, category: inventory.category, type: inventory.type
           })
}

// delete an inventory
exports.delete = async (id) => {
    return await Inventory.destroy({ where: { id: id } })
}


// update an inventory
exports.update = async (inventory) => {
    return await Inventory.update(
                {
                    cost: inventory.cost, quantity: inventory.quantity,  
                    meal: inventory.meal, category: inventory.category, 
                    type: inventory.type
                },
                { where: { id: inventory.id } }
           )
}


// get an inventory details by id 
exports.details = async (id) => {
  return await Inventory.findOne({ where: { id: id } })
}

// get all inventories  
exports.all = async () => {
    return await Inventory.findAll({ raw: true })
}