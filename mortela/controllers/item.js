// include external libraries


// include internal libraries/modules
const Item = require('../models/item')



// add an item
exports.add = async (item) => {
    return Item.create({
                name: item.name, cost: item.cost, quantity: item.quantity,  
                meal: item.meal, category: item.category, type: item.type
           })
}

// delete an item
exports.delete = async (id) => {
    return await Item.destroy({ where: { id: id } })
}


// update an item
exports.update = async (item) => {
    return await Item.update(
                {
                    cost: item.cost, quantity: item.quantity,  
                    meal: item.meal, category: item.category, 
                    type: item.type
                },
                { where: { id: item.id } }
           )
}


// get an item details by id 
exports.details = async (id) => {
  return await Item.findOne({ where: { id: id } })
}

// get all item  
exports.all = async () => {
    return await Item.findAll({ raw: true })
}