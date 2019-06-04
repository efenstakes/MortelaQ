// include external libraries

// include internal libraries
const Models = require('../models')
const Db = require('../config/database')

// console.log('models', Models)

for (const model in Models) {
   // model.sync({ force: true })
   // console.log('model ', Models[model])
   // (Models[model]).sync({ force: true })
}

// Models.User.findAll({})

/*
for (const model of Models) {
    console.log('model ', model)
}
*/

/*
Models.User.add({ 
         name: 'jimmy ki', password: 'jimmy123', 
         role: 'ADMIN', salary: 90000 
})
  
Models.User.add({ 
   name: 'mavangi', password: 'mavangi123', 
   role: 'MANAGER', salary: 90000 
})

Models.User.add({ 
   name: 'tom kasyoka', password: 'tom123', 
   role: 'CASHIER', salary: 90000 
})

Models.User.add({ 
   name: 'eliud mutua', password: 'eliud123', 
   role: 'CASHIER', salary: 90000 
})
*/


Models.Product.all()
              .then((prods)=> {
                 console.log('rpd', prods)
              })

// Models.Penalty.all().then(res=> {
//  console.log('res', res)
// })

// Models.Penalty.details('DccQVXpQ05bBbnq1').then(res=> {
//   console.log('res', res)
// })
// Models.Penalty.all().then((usrs)=> console.log(usrs))
// Models.User.all().then((usrs)=> console.log(usrs))
// Db.User.remove({}, { multi: true })

// Models.User.findAll({ raw: true }).then(users=> console.log(users))

let products = [
   { name: 'beans', cost: 0, quantity: 1, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'chapo', cost: 20, quantity: 87, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'fanta', cost: 30, quantity: 234, meal: 'LUNCH', category: 'DRINKS', type: 'DRINK' },
   { name: 'aqua', cost: 20, quantity: 243, meal: 'ALL', category: 'DRINKS', type: 'DRINK' },
   { name: 'coffee', cost: 10, quantity: 450, meal: 'BREAKFAST', category: 'DRINKS', type: 'DRINK' },
   { name: 'buns', cost: 10, quantity: 230, meal: 'BREAKFAST', category: 'SNACKS', type: 'SNACK' },
   { name: 'nyama choma', cost: 230, quantity: 120, meal: 'LUNCH', category: 'FOODS', type: 'FOOD' },
   { name: 'beef', cost: 180, quantity: 200, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'pilau', cost: 120, quantity: 2, meal: 'LUNCH', category: 'FOODS', type: 'FOOD' },
   { name: 'shawarma', cost: 150, quantity: 40, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'zege', cost: 170, quantity: 89, meal: 'SUPPER', category: 'FOODS', type: 'FOOD' },
   { name: 'cow peas', cost: 60, quantity: 100, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'green grams', cost: 60, quantity: 100, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'minji', cost: 110, quantity: 120, meal: 'LUNCH', category: 'FOODS', type: 'FOOD' },
   { name: 'matumbo', cost: 180, quantity: 200, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'energy drink', cost: 220, quantity: 140, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'wine', cost: 400, quantity: 900, meal: 'ALL', category: 'DRINKS', type: 'DRINK' },
   { name: 'fries', cost: 120, quantity: 87, meal: 'SUPPER', category: 'FOODS', type: 'FOOD' },
   { name: 'fries masala', cost: 150, quantity: 99, meal: 'SUPPER', category: '', type: 'FOOD' },
   { name: 'ugali', cost: 50, quantity: 67, meal: 'LUNCH', category: 'FOODS', type: 'FOOD' },
   { name: 'cabbage', cost: 50, quantity: 98, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'spinach', cost: 60, quantity: 76, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'matoke', cost: 200, quantity: 89, meal: 'ALL', category: 'FOODS', type: 'FOOD' },
   { name: 'chicken', cost: 350, quantity: 86, meal: 'ALL', category: 'FOODS', type: 'FOOD' }
]

products.map((product)=> Models.Product.add(product) )