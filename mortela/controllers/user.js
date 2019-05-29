// include external libraries


// include internal libraries/modules
const User = require('../models/user')



// add a user
exports.add = async (user) => {
    return User.create({
                name: user.name, password: user.password,  
                priviledge: user.priviledge, salary: user.salary
           })
}

// delete a user
exports.delete = async (id) => {
    return await User.destroy({ where: { id: id } })
}


// update a user
exports.update = async (user) => {
    return await User.update(
                {
                    name: user.name, password: user.password,  
                    priviledge: user.priviledge, salary: user.salary
                },
                { where: { id: user.id } }
           )
}


// update a user password
exports.reset_password = async (user) => {
    return User.update(
                    { password: user.password },
                    { where: { id: user.id } }
                )
}


// get user details by id 
exports.details = async (id) => {
  return await User.findOne({ where: { id: id } })
}

// get all users  
exports.all = async () => {
    return await User.findAll({ raw: true })
}

// check if a user account exists based on name and password
exports.account_exists = async (user) => {
    return User.findOne({ where: { name: user.name, password: user.password } })
}

