import { Ingredient } from '../models/ingredient.js'

function createIngredient(req, res) {
  Ingredient.create(req.body)
  .then((ingredient) => res.json(ingredient))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function ingredientIndex(req, res) {
  Ingredient.find({})
  .then(ingredients => res.json(ingredients))
  .catch(err => {
		console.log(err)
    res.json(err)
  })
}

function deleteIngredient(req, res) {
  Ingredient.findByIdAndDelete(req.params.id)
  .then(ingredient => res.json(ingredient))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  createIngredient,
  ingredientIndex,
  deleteIngredient
}