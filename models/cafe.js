const mongoose = require('mongoose')

const cafeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: { 
      createdAt: 'created_at' 
    } 
  }
)

exports.cafeSchema = cafeSchema;
module.exports = mongoose.model('cafeModel', cafeSchema)
