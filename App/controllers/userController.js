const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")
const { json } = require('body-parser')


exports.getAllUser = async (req, res, next) => {
  const data = await userModel.find()
  return res.status(200).json({
    success: true,
    data: data,
  })
}

exports.postUser = async (req, res, next) => {
  const data = { ...req.body }
  const user = await userModel.create(data) 
  return res.status(200).json({
    success: true,
    user
  })
}

exports.login = async (req, res, next) => {
  var email = req.body.email
  var password = req.body.password

  await userModel.findOne({
      email: email,
      password: password
  })
  .then(data=>{
    if (data){
      var token = jwt.sign({
        _id: data._id
      }, 'pass')
      return res.status(200).json({
        success: true,
        data: token
      })
    } else {
      return res.status(400).json({
        success: false,
      })
    }
  })
  .catch(err=>{
    res.status(500).send()
  })
}

exports.register = async (req, res, next) => {
  var email = req.body.email

  await userModel.findOne({
    email: email,
  })
  .then(data=>{
    if (!data){
      const user = userModel.create(req.body) 
      return res.status(200).json({
        success: true,
        message: "Register successfully",
      })
    } else {
      return res.status(400).json({
        success: false,
        message: "Register fail. Account already exists"
      })
    }
  })
  .catch(err=>{
    res.status(500).send()
  })
}
