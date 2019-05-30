// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Item = Models.Item



// add an item
exports.add = async(item) => {
    return Item.insert({
        name: item.name,
        cost: item.cost,
        quantity: item.quantity,
        meal: item.meal,
        category: item.category,
        type: item.type
    })
}

// delete an item
exports.delete = async(id) => {
    return await Item.remove({ _id: id })
}


// update an item
exports.update = async(item) => {
    return await Item.update({ _id: order.id }, {
        $set: {
            cost: item.cost,
            quantity: item.quantity,
            meal: item.meal,
            category: item.category,
            type: item.type
        }
    })
}


// get an item details by id 
exports.details = async(id) => {
    return await Item.findOne({ _id: order.id })
}

// get all item  
exports.all = async() => {
    return await Item.find({})
}