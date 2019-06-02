// include external libraries


// include internal libraries/modules
const Models = require('../config/database')
const Penalty = Models.Penalty
const User = Models.User



// add a penalty
exports.add = async(penalty) => {
    return Penalty.insert({
                item: penalty.item,
                cost: penalty.cost,
                description: penalty.description,
                staff_id: penalty.staff._id,
                added_on: new Date()
    })
}

// delete a penalty
exports.delete = async(id) => {
    return await Penalty.remove({ _id: id })
}


// update a penalty
exports.update = async(penalty) => {
    return await Penalty.update({ _id: penalty._id }, {
        $set: {
            item: penalty.item,
            cost: penalty.cost,
            description: penalty.description
        }
    })
}


// get an penalty details by id 
exports.details = async(id) => {
    let details = await Penalty.findOne({ _id: id })
    let staff = await User.findOne({ _id: details.staff_id })
    return { details, ...{staff} }
}

// get all penalty  
exports.all = async() => {
    let all = []
    let penalties = await Penalty.find({})

    for (const penalty of penalties) {
        let staff = await User.findOne({ _id: penalty.staff_id })
        all.push({ ...penalty, ...{ staff } })
    }

    return all
}