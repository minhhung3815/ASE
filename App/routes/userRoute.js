const express = require('express')

const route = express.Router()
const user = require('../controllers/userController')

route.get('/all', user.getAllUser)
route.post('/post', user.postUser)
route.post('/login', user.login)
route.post('/register', user.register)


module.exports = route