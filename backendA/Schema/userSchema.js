const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  
})

module.exports = mongoose.model("user", userSchema)
