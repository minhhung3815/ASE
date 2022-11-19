const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('User', userModel)
