import mongoose from 'mongoose'

const ingredientSchema = new mongoose.Schema({
  name: String
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema)

export {
  Ingredient
}