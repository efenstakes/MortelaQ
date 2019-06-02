// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Inventory = Models.Inventory



// add an inventory
exports.add = async(inventory) => {
    return Inventory.insert({
        name: inventory.name,
        cost: inventory.cost,
        quantity: inventory.quantity,
        category: inventory.category,
        type: inventory.type,
        added_on: inventory.added_on
    })
}

// delete an inventory
exports.delete = async(id) => {
    return await Inventory.remove({ _id: id })
}


// update an inventory
exports.update = async(inventory) => {
    return await Inventory.update({ _id: inventory._id }, {
        $set: {
            cost: inventory.cost,
            quantity: inventory.quantity,
            category: inventory.category,
            type: inventory.type
        }
    })
}


// get an inventory details by id 
exports.details = async(id) => {
    return await Inventory.findOne({ _id: id })
}

// get all inventories  
exports.all = async() => {
    return await Inventory.find({})
}