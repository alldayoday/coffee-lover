import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  shops: [shopSchema],
}, {
  timestamps: true
})

const shopSchema = new mongoose.Schema({
  name: String,
  location: String
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
