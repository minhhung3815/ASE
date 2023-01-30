const express = require('express')
const bodyParser = require('body-parser')
const connectDatabase = require('./App/database/db')
const app = express()
const route = require('./App/routes/index')
const cors = require('cors')

require('dotenv').config()
// connectDatabase()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(route)

app.listen(process.env.PORT, err => {
  err
    ? console.log(err)
    : console.log(`Server connected to PORT ${process.env.PORT}`)
})
