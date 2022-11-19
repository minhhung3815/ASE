const express = require('express')

const route = express.Router()
const accommodation = require('./accommodationRoute')

route.use('/api/v1/accommodation', accommodation)

module.exports = route
