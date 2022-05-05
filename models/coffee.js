import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coffeeSchema = new Schema({
  name: String,
  ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
  hot: Boolean,
  barista: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

export {
  Coffee
}