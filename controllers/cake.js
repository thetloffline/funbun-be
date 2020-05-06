const Cake = require('../models/cake.js')
const Cafe = require('../models/cafe.js')
const success = require('../utils/respond')

exports.create = async (req, res, next) => {
  const cafeName = req.body.name

  if (await doesCafeExist(cafeName) === null) {
    console.log('kohvikut ei leitud.')
    const cafe = await Cafe.create(req.body)
    req.body.cafe_id = cafe._id
    // set cake.cafe ref
  } else {
    const foundExistingCafe = await doesCafeExist(cafeName)
    console.log('KOHVIK ON LEITUD!')
    req.body.cafe_id = foundExistingCafe._id
  }

  const cake = await Cake.create(req.body)
  success(res, cake)
}

exports.getAllCakes = async (req, res, next) => {
  const result = await Cake.find({})
  // res.send('success!!')    
  success(res, result)
}

async function doesCafeExist (name) {
  return await Cafe.findOne({'name' : name}, function(err, obj) {
    if (err) {
      console.log(err)
    } else {
      return obj
    }
  })
}


/* const Cake = require('../models/cakeModel.js').model
const mongoose = require('mongoose')

exports.create = (req, res, next) => {
  const newCake = {
    price: req.body.price,
    looks: req.body.looks,
    taste: req.body.taste,
    bun: req.body.bun,
    comment: req.body.comment
  }
  console.log(newCake)
  Cake.create(newCake, (err, doc) => {
    if (err) { res.status(400) }
    res.status(201)
    console.log('doc')
  })
}
 */