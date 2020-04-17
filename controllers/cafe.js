const Cafe = require('../models/cafe.js')
const Cake = require('../models/cake.js')
const success = require('../utils/respond')

exports.create = async (req, res, next) => {
  const cafe = await Cafe.create(req.body)
  success(res, cafe)
}

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
