const Feedback = require('../models/feedback')
const success = require('../utils/respond')
const path = require('path')

exports.create = async (req, res) => {
  try {
    if (req.files) {
      const productImage = req.files['files[0]']
      const timestampedProductImage = (Math.floor(Date.now() / 1000)) + '-' + productImage.name 

      const filePath = path.join(__dirname, '/../public/images/', timestampedProductImage)

      await productImage.mv(filePath, (err) => {
        if (err) {
          return console.log(err)
        }

        console.log('file moved to ', req.hostname + '7' + filePath)
      })

      req.body.productImage = timestampedProductImage
    } else if (!req.body.productImage) {
      console.log('no image was added to the request')
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

exports.updateTaste = async (req,res) => {
  try {  
    const result = await Feedback.findOneAndUpdate( 
      {_id: req.params.id},
      { $set : { taste: req.body.taste } },
      { new : true }
      )
    success(res, result)
  } catch (error) {
   console.log(error) 
  }
}
