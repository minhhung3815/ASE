const express = require('express')

const route = express.Router()
const accommodation = require('../controllers/accommodationController')

route.get('/all', accommodation.getAllAccommodation)

module.exports = route