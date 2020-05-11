const Feedback = require('../models/feedback')
const success = require('../utils/respond')
const path = require('path')

exports.create = async (req, res) => {
  try {
    if (req.files) {
      const productImage = req.files['files[0]']
      const saltedProductImage = (Math.floor(Date.now() / 1000)) + '-' + productImage.name 
      const filePath = path.join(__dirname, '/../public/images/', saltedProductImage)

      await productImage.mv(filePath, (err) => {
        if (err) {
          return console.log(err)
        }
        console.log('file moved to ', filePath)
      })
      req.body.productImage = saltedProductImage
    }
    const feedback = await Feedback.create(req.body)
    success(res, feedback)
  } catch (error) {
    console.log('error creating new feedback :: ', error)
  }
}

exports.allFeedback = async (req, res) => {
  try {
    const result = await Feedback.find({})
    success(res, result)
  } catch (error) {
    console.log('error getting all feedback :: ', error)
  }
}
