import mongoose from 'mongoose'

const shopSchema = new mongoose.Schema({
  name: String,
  location: String
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  shops: [shopSchema],
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
