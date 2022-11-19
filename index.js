const express = require('express')
const bodyParser = require('body-parser')
const connectDatabase = require('./App/database/db')
const app = express()
const route = require('./App/routes/index')

require('dotenv').config()
connectDatabase()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH')
  res.setHeader('Access-Control-Allow-Headers', ' Content-Type, Authorization')
  next()
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(route)

app.listen(process.env.PORT, err => {
  err
    ? console.log(err)
    : console.log(`Server connected to PORT ${process.env.PORT}`)
})
