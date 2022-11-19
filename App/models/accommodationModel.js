const mongoose = require('mongoose')

const accommodationModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    ward: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    owner_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { collection: 'accommodation' },
)

module.exports = mongoose.model('Accommodation', accommodationModel)
