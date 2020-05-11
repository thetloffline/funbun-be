const Feedback = require('../models/feedback')
const success = require('../utils/respond')

exports.create = async (req, res) => {
  try {
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
