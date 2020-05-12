const Shop = require('../models/shop')
const success = require('../utils/respond')

exports.create = async (req, res) => {
  const shop = await Shop.create(req.body)
  success(res, shop)
}

exports.allShops = async (req, res) => {
  const result = await Shop.find({})
  success(res, result)
}

exports.shopById = async (req, res) => {
  const result = await Shop.find(
    { _id: req.params.id }
  )
  success(res, result)
}

