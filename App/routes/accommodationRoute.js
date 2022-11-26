const express = require('express')
const route = express.Router()
const accommodation = require('../controllers/accommodationController')

route.get('/all', accommodation.getAllAccommodation)

route.get('/filter', accommodation.getFilterAccommodation)

route.post('/add', accommodation.postInsertAccommodation)

route.patch('/edit/:id', accommodation.patchEditAccommodation)

route.get('/view/:id', accommodation.getOneAccommodation)

route.delete('/delete/:id', accommodation.deleteAccommodation)

module.exports = route
