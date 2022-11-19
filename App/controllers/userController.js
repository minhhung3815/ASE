const userModel = require('../models/userModel')

exports.getAllUser = async (req, res, next) => {
  const data = await userModel.find()
  return res.status(200).json({
    success: true,
    data: data,
  })
}

exports.postInsertUser = async (req, res, next) => {
  const data = { ...req.body.data }
  const user = await userModel.create(data)
  return res.status(200).json({
    success: true,
    user,
  })
}
