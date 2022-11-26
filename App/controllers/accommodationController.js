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
  const minPrice = req.query.minPrice ? Number(req.query.minPrice) : ''
  const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : ''
  const minCapacity = req.query.minCapacity ? Number(req.query.minCapacity) : ''
  const maxCapacity = req.query.maxCapacity ? Number(req.query.maxCapacity) : ''
  const district = req.query.district ? req.query.district : ''
  const ward = req.query.ward ? req.query.ward : ''
  const sort = req.query.sort ? req.query.sort : ''
  const data = await accommodationModel.find()
  // const districts = [
  //   {
  //     id: 1,
  //     name: "Quận 3"
  //   },
  //   {
  //     id: 2,
  //     name: "Quận 9"
  //   },
  //   {
  //     id: 3,
  //     name: "Quận 10"
  //   },
  //   {
  //     id: 4,
  //     name: "Quận 7"
  //   },
  //   {
  //     id: 5,
  //     name: "Quận 1"
  //   },
  //   {
  //     id: 6,
  //     name: "Quận 12"
  //   },
  //   {
  //     id: 7,
  //     name: "Quận 5"
  //   },
  //   {
  //     id: 8,
  //     name: "Quận Bình Thạnh"
  //   },
  //   {
  //     id: 9,
  //     name: "Quận Bình Tân"
  //   },
  //   {
  //     id: 10,
  //     name: "Quận Tân Bình"
  //   },
  // ]
  // const wards = [
  //   {
  //     id: 1,
  //     name: 'Phường 10',
  //     districtName: 'Quận 9',
  //   },
  //   {
  //     id: 2,
  //     name: 'Phường 12',
  //     districtName: 'Quận 3',
  //   },
  //   {
  //     id: 3,
  //     name: 'Phường 1',
  //     districtName: 'Quận 10',
  //   },
  //   {
  //     id: 4,
  //     name: 'Phường 7',
  //     districtName: 'Quận 10',
  //   },
  //   {
  //     id: 5,
  //     name: 'Phường Tân Thuận Đông',
  //     districtName: 'Quận 7',
  //   },
  //   {
  //     id: 6,
  //     name: 'Phường 14',
  //     districtName: 'Quận 10',
  //   },
  //   {
  //     id: 7,
  //     name: 'Phường 12',
  //     districtName: 'Quận 10',
  //   },
  //   {
  //     id: 8,
  //     name: 'Phường Nguyễn Cư Trinh',
  //     districtName: 'Quận 1',
  //   },
  //   {
  //     id: 9,
  //     name: 'Phường Thạnh Xuân',
  //     districtName: 'Quận 12',
  //   },
  //   {
  //     id: 10,
  //     name: 'Phường 14',
  //     districtName: 'Quận Bình Thạnh',
  //   },
  //   {
  //     id: 11,
  //     name: 'Phường Bình Trị Đông A',
  //     districtName: 'Quận Bình Tân',
  //   },
  //   {
  //     id: 12,
  //     name: 'Phường An Lạc A',
  //     districtName: 'Quận Bình Tân',
  //   },
  //   {
  //     id: 13,
  //     name: 'Phường 4',
  //     districtName: 'Quận Tân Bình',
  //   },
  //   {
  //     id: 14,
  //     name: 'Phường 10',
  //     districtName: 'Quận 5',
  //   },
  //   {
  //     id: 15,
  //     name: 'Phường 13',
  //     districtName: 'Quận Tân Bình',
  //   },
  //   {
  //     id: 16,
  //     name: 'Phường 11',
  //     districtName: 'Quận 5',
  //   },
  //   {
  //     id: 17,
  //     name: 'Phường 11',
  //     districtName: 'Quận 3',
  //   },
  //   {
  //     id: 18,
  //     name: 'Phường Đa Kao',
  //     districtName: 'Quận 1',
  //   },
  // ]

  let result = data.filter(ele => {
    let cond1 = true
    let cond2 = true
    let cond3 = true
    let cond4 = true
    let cond5 = true
    let cond6 = true
    if (minPrice) {
      cond1 = Number(ele.price) >= Number(minPrice)
    }
    if (maxPrice) {
      cond2 = Number(ele.price) <= Number(maxPrice)
    }
    if (district) {
      cond3 = district === ele.district
    }
    if (ward) {
      cond4 = ward === ele.ward
    }
    if (minCapacity) {
      cond5 = Number(ele.capacity) >= Number(minCapacity)
    }
    if (maxCapacity) {
      cond6 = Number(ele.capacity) <= Number(maxCapacity)
    }
    return cond1 && cond2 && cond3 && cond4 && cond5 && cond6
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
