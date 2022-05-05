import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coffeeSchema = new Schema({
  name: String,
  ingred: String,
  hot: Boolean,
  barista: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

export {
  Coffee
}