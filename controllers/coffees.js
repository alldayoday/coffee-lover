import { Coffee } from '../models/coffee.js'
import { Ingredient } from '../models/ingredient.js'

function index(req, res) {
  Coffee.find({})
  .then(coffees => {
    res.render('coffees/index', {
      coffees,
      title: "All Coffees"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/coffees")
  })
}

function create(req, res) {
  req.body.barista = req.user.profile._id
	req.body.hot = !!req.body.hot
  Coffee.create(req.body)
  .then(coffee => {
    res.redirect('/coffees')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/coffees')
  })
}

// function show(req, res) {
//   Coffee.findById(req.params.id)
//   .populate("barista")
//   .populate("ingredients")
//   .then(coffee => {
//     res.render('coffees/show', {
//       coffee,
//       ingredients,
//       title: "Coffee Details"
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/coffees')
//   })
// }

function show(req, res) {
  Coffee.findById(req.params.id)
  .populate('barista')
  .populate('ingredients')
  .exec(function(err, coffee) {
  Ingredient.find({_id: {$nin: coffee.ingredients}}, function(err, ingredients) {
      res.render('coffees/show', {
        title: 'Coffee Details', 
        coffee,
        ingredients,
      })
    })
  })
}

function flipHot(req, res) {
  Coffee.findById(req.params.id)
  .then(coffee => {
    coffee.hot = !coffee.hot
    coffee.save()
    .then(()=> {
      res.redirect(`/coffees/${coffee._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/coffees')
  })
}

function edit(req, res) {
  Coffee.findById(req.params.id)
  .then(coffee => {
    res.render('coffees/edit', {
      coffee,
      title: "remake"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/coffees')
  })
}

function update(req, res) {
  Coffee.findById(req.params.id)
  .then(coffee => {
    if (coffee.barista.equals(req.user.profile._id)) {
      req.body.hot = !!req.body.hot
      coffee.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/coffees/${coffee._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/coffees`)
  })
}

function deleteCoffee(req, res) {
  Coffee.findById(req.params.id)
  .then(coffee => {
    if (coffee.barista.equals(req.user.profile._id)) {
      coffee.delete()
      .then(() => {
        res.redirect('/coffees')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/coffees')
  })
}

function addTo(req, res) {
  Coffee.findById(req.params.id, function(err, coffee) {
    coffee.ingredients.push(req.body.ingredientId)
    coffee.save(function(err) {
      res.redirect(`/coffees/${coffee._id}`)
    })
  })
}

export {
  index,
  create,
  show,
  flipHot,
  edit,
  update,
  deleteCoffee as delete,
  addTo,
}

