const mongoose = require('mongoose')
const cafeSchema = require('./cafe.js').schema
const cakeSchema = require('./cake.js').schema
const feedbackSchema = mongoose.Schema(
  {
    looks: {
      type: Number,
      trim: true
    },
    taste: {
      type: Number,
      trim: true
    },
    bun: {
      type: Number,
      trim: true
    },
    comment: {
      type: String,
      trim: true
    },
    cafe: cafeSchema,
    cake: cakeSchema
  },
  {
    timestamps: { 
      createdAt: 'created_at' 
    } 
  }
)

exports.feedbackSchema = feedbackSchema
module.exports = mongoose.model('feedbackModel', feedbackSchema)
