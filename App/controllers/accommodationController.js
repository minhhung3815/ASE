const accommodationModel = require('../models/accommodationModel')
const asyncErrorHandler = require('../middlewares/asyncErrorHandler')
exports.getAllAccommodation = asyncErrorHandler(async (req, res, next) => {
  const data = await accommodationModel.find()

  return res.status(200).json({
    success: true,
    data: data,
  })
})

exports.getFilterAccommodation = asyncErrorHandler(async (req, res, next) => {
  const minPrice = req.query.minPrice ? Number(req.query.minPrice) : -1
  const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : -1
  const district = req.query.district ? req.query.district : ''
  const ward = req.query.ward ? req.query.ward : ''
  const sort = req.query.sort ? req.query.sort : ''
  const data = await accommodationModel.find()

  let result = data.filter(ele => {
    if (minPrice > 0 && maxPrice > 0 && district && ward) {
      return (
        Number(ele.price) >= minPrice &&
        Number(ele.price) <= maxPrice &&
        ele.district === district &&
        ele.ward === ward
      )
    } else if (minPrice > 0 && maxPrice > 0 && district && !ward) {
      return (
        Number(ele.price) >= minPrice &&
        Number(ele.price) <= maxPrice &&
        ele.district === district
      )
    } else if (minPrice > 0 && maxPrice > 0 && !district && ward) {
      return (
        Number(ele.price) >= minPrice &&
        Number(ele.price) <= maxPrice &&
        ele.ward === ward
      )
    } else if (minPrice > 0 && maxPrice > 0 && !district && !ward) {
      return Number(ele.price) >= minPrice && Number(ele.price) <= maxPrice
    } else if (minPrice < 0 && maxPrice < 0 && district && ward) {
      return ele.district === district && ele.ward === ward
    } else if (minPrice < 0 && maxPrice < 0 && !district && ward) {
      return ele.ward === ward
    } else if (minPrice < 0 && maxPrice < 0 && district && !ward) {
      return ele.district === district
    } else {
      return true
    }
  })

  if (sort) {
    result = result.sort((a, b) => {
      if (sort === 'ASC') {
        return Number(a.price) - Number(b.price)
      }
      return Number(b.price) - Number(a.price)
    })
  }

  return res.status(200).json({
    success: true,
    data: result,
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

  await accommodationModel.findOneAndDelete({ _id: id })

  return res.status(200).json({
    success: true,
  })
})
