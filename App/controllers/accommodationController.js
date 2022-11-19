const accommodationModel = require('../models/accommodationModel')
const asyncErrorHandler = require('../middlewares/asyncErrorHandler')
exports.getAllAccommodation = asyncErrorHandler(async (req, res, next) => {
  const data = await accommodationModel.find()

  return res.status(200).json({
    success: true,
    data: data,
  })
})

exports.postInsertAccommodation = asyncErrorHandler(async (req, res, next) => {
  const data = { ...req.body }
  const accommodation = await accommodationModel.create(data)

  return res.status(200).json({
    success: true,
    data: accommodation,
  })
})

exports.getOneAccommodation = asyncErrorHandler(async (req, res, next) => {
  const data = { ...req.body }
  const id = req.params.id
  const accommodation = await accommodationModel.findById(id)

  if (!accommodation) {
    return res.status(404).json({
      success: false,
    })
  }

  return res.status(200).json({
    success: true,
    data: accommodation,
  })
})

exports.patchEditAccommodation = asyncErrorHandler(async (req, res, next) => {
  const data = { ...req.body }
  const id = req.params.id
  await accommodationModel.findOneAndUpdate(
    { _id: id },
    {
      ...data,
      updatedAt: Date.now(),
    },
  )

  return res.status(200).json({
    success: true,
  })
})

exports.deleteAccommodation = asyncErrorHandler(async (req, res, next) => {
  const id = req.params.id

  await accommodationModel.findOneAndDelete({ _id: id }, {})
})
