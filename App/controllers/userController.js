const userModel = require('../models/userModel')

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
    user,
  })
}
