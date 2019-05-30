// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Order = Models.Order


// add an order
exports.add = async(order) => {
    return Order.insert({
        table_no: order.table_no,
        is_cleared: order.is_cleared,
        is_special: order.is_special,
        type: order.type,
        cashier_id: order.cashier_id,
        items: order.items
    })
}


// delete an order
exports.delete = async(id) => {
    return await Order.remove({ _id: id })
}

// clear an order
exports.clear = async(id) => {
    return await Order.update({ _id: order.id }, { is_cleared: true })
}

// update an order
exports.update = async(order) => {
    return await Order.update({ _id: order.id }, {
        $set: {
            table_no: order.table_no,
            is_cleared: order.is_cleared,
            is_special: order.is_special,
            type: order.type,
            cashier_id: order.cashier_id
        }
    })
}


// get an order details by id 
exports.details = async(id) => {
    return await Order.findOne({ _id: id })
}

// get all order  
exports.all = async() => {
    return await Order.find({})
}

// get all orders made by a certain cashier  
exports.all_for_cachier = async(id) => {
    return await Order.find({ cashier_id: id })
}


// get all orders which are cleared
exports.all_cleared = async(bool) => {
    return await Order.find({ is_cleared: bool })
}


// get all orders which are special
exports.all_special = async(bool) => {
    return await Order.find({ is_special: bool })
}