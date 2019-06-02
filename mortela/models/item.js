// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Item = Models.Item



// add an item
exports.add = async(item) => {
    return Item.create({
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
    return await Item.destroy({ _id: id })
}


// update an item
exports.update = async(item) => {
    return await Item.update({ _id: item._id },
        {
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
    return await Item.findOne({ _id: id })
}

// get all item  
exports.all = async() => {
    return await Item.findAll({ raw: true })
}