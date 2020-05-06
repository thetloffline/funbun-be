const Cafe = require('../models/cafe.js')
const Cake = require('../models/cake.js')
const UserFeedback = require('../domain/feedback.js')
const domain = require('../domain/domain.js')
const repositor = require('../repositor.js')
const success = require('../utils/respond')
const getFeedback = require('./getFeedback')
const calAverage = require('./calAverage')

exports.create = async (req, res, next) => {
  const cafe = new Cafe()
  cafe.name = req.body.name
  cafe.address = req.body.address
    
  const cake = new Cake ()
   cake.price = req.body.price
   cake.cafeId = cafe._id
  
  const feedback = new UserFeedback ()
  feedback.taste = req.body.taste
  feedback.looks = req.body.looks
  feedback.bun = req.body.bun
  feedback.comment = req.body.comment
  feedback.cafe = cafe
  feedback.cake = cake
  
  

  domain.validateCafeName(cafe)
  domain.validateFeedback(feedback)

  success(res, req.body)
}
      
exports.getFeedback = (req, res, next) => {
  const feedbackArr = getFeedback.getFeedback()
  success(res, feedbackArr)
}

exports.averageTasteScore = (req, res, next) => {
  const score = calAverage.avgTasteScore
  success(res, score)
}
      /* 
      exports.getAllCafes = async (req, res, next) => {
        const result = await Cafe.find({}) 
        success(res, result)
      }
      
      exports.getAggregatedCakes = async (req, res, next) => {
        const result = await aggregateCakes()
        success(res, result)
      }
      
      async function getAllCakes() {
        const result = await Cake.find({})
        return result
      }
      
      async function aggregateCakes () {
        const cafesArr = await Cafe.find({})
        const cakesArr = await getAllCakes()
        const allCafesWithCakes = []
        
        for (let i = 0; i < cafesArr.length; i++) {
          let foundCakes = []
          
          for (let j = 0; j < cakesArr.length; j++) {
            if (cafesArr[i]._id.equals(cakesArr[j].cafe_id)) {
              foundCakes.push(cakesArr[j])
              cafesArr[i].cakes = foundCakes
            }
          }
          allCafesWithCakes.push(cafesArr[i])
        }
        return allCafesWithCakes
      }
      */