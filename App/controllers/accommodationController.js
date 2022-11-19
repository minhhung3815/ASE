const accommodationModel = require('../models/accommodationModel')

exports.getAllAccommodation = async (req, res, next) => {
  const data = await accommodationModel.find()
  return res.status(200).json({
    success: true,
    data: data,
  })
}

exports.postInsertAccommodation = async (req, res, next) => {
  const data = { ...req.body.data }
  const accommodation = await accommodationModel.create(data)
  return res.status(200).json({
    success: true,
    accommodation,
  })
}
