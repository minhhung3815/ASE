const mongoose = require('mongoose')

const accommodationModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'accommodation' },
)

module.exports = mongoose.model('Accommodation', accommodationModel)
