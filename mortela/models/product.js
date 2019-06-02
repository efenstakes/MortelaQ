// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Product = Models.Product



// add an item
exports.add = async(item) => {
    return Product.insert({
        name: item.name,
        cost: item.cost,
        quantity: item.quantity,
        meal: item.meal,
        category: item.category,
        type: item.type,
        added_on: new Date()
    })
}

// delete an item
exports.delete = async(id) => {
    return await Product.remove({ _id: id })
}


// update an item
exports.update = async(item) => {
    return await Product.update({ _id: item._id }, {
        $set: {
            cost: item.cost,
            quantity: item.quantity,
            meal: item.meal,
            category: item.category,
            type: item.type
        }
    })
}


// update an item's quantity only
exports.update_quantity = async(item) => {
    return await Product.update({ _id: item._id }, {
        $set: {
            quantity: item.quantity
        }
    })
}


// get an item details by id 
exports.details = async(id) => {
    return await Product.findOne({ _id: id })
}

// get all item  
exports.all = async() => {
    return await Product.find({})
}