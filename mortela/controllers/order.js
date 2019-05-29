// include external libraries


// include internal libraries/modules
const Order = require('../models/order')
const OrderItem = require('../models/order-item')


// add an order
exports.add = async (order) => {
    return Order.create({
                table_no: order.table_no, is_cleared: order.is_cleared, is_special: order.is_special,  
                type: order.type, cashier_id: order.cashier_id
           })
}

// add an order items
exports.add_items = async (id, items) => {
    items.forEach((item)=> {
           OrderItem.create({ order_id: id, item_id: item.id, quantity: item.quantity })
    })
}

// delete an order
exports.delete = async (id) => {
    return await Order.destroy({ where: { id: id } })
}


// update an order
exports.update = async (order) => {
    return await Order.update(
                {
                    table_no: order.table_no, is_cleared: order.is_cleared, is_special: order.is_special,  
                    type: order.type, cashier_id: order.cashier_id
                },
                { where: { id: order.id } }
           )
}


// get an order details by id 
exports.details = async (id) => {
  return await Order.findOne({ where: { id: id } })
}

// get all order  
exports.all = async () => {
    return await Order.findAll({ raw: true })
}

// get all orders made by a certain cashier  
exports.all_for_cachier = async (id) => {
    return await Order.findAll({ raw: true, where: { cashier_id: id } })
}


// get all orders which are cleared
exports.all_cleared = async (bool) => {
    return await Order.findAll({ raw: true, where: { is_cleared: bool } })
}


// get all orders which are special
exports.all_special = async (bool) => {
    return await Order.findAll({ raw: true, where: { is_special: bool } })
}