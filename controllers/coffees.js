import { Coffee } from '../models/coffee.js'


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

function show(req, res) {
  Coffee.findById(req.params.id)
  .populate("barista")
  .then(coffee => {
    res.render('coffees/show', {
      coffee,
      title: "Coffee Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/coffees')
  })
}

export {
  index,
  create,
  show,
}

