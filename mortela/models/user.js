// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const User = Models.User



// add a user
exports.add = async(user) => {
    const record = await User.insert({
        name: user.name,
        password: user.password,
        priviledge: user.priviledge,
        salary: user.salary,
        added_on: new Date()
    })
    return record
}

// delete a user
exports.delete = async(id) => {
    return await User.remove({ _id: id })
}


// update a user
exports.update = async(user) => {
    return await User.update({ _id: user.id }, {
        $set: {
            name: user.name,
            password: user.password,
            priviledge: user.priviledge,
            salary: user.salary
        }
    })
}


// update a user password
exports.reset_password = async(user) => {
    return User.update({ _id: user.id }, { $set: { password: user.password } })
}

// get user details by id 
exports.details = async(id) => {
    return await User.findOne({ _id: id })
}

// get all users  
exports.all = async() => {
    let all = await User.find({})
    return all
}

// check if a user account exists based on name and password
exports.account_exists = async(user) => {
    return User.findOne({ name: user.name, password: user.password })
}