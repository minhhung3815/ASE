const express = require('express')

const route = express.Router()
const user = require('../controllers/userController')

route.get('/all', user.getAllUser)

module.exports = route