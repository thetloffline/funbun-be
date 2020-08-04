const Product = require('../models/product')
const success = require('../utils/respond')

exports.create = async (req, res) => {
  try {
    const result = await Product.create(req.body)
    success(res, result)
  } catch (error) {
    console.log('error creating new product :: ', error)
  }
}

exports.allProducts = async (req, res) => {
  try {
    const result = await Product.find({})
    success(res, result)
  } catch (error) {
    console.log('error getting all products :: ', error)
  }
}

exports.productById = async (req, res) => {
  try {
    const result = await Product.find(
      { _id: req.params.id }
    )
    success(res, result)
  } catch (error) {
    console.log('error getting product by ID :: ', error)
  }
}

exports.updatePrice = async (req, res) => {
  try {
    const result = await Product.findByIdAndUpdate(
      {_id: req.params.id},
      {$push: { price: req.body.price }},
      { new: true }
    )
    success(res, result)
  } catch (error) {
    console.log(error) 
  }
}