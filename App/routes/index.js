const express = require('express')

const route = express.Router()
const accommodation = require('./accommodationRoute')
const user = require('./userRoute')

route.use('/api/v1/user', user)
route.use('/api/v1/accommodation', accommodation)


module.exports = route
