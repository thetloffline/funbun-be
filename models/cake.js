const mongoose = require('mongoose')

const cakeSchema = mongoose.Schema(
  { 
    price: {
      type: Number,
      trim: true
    },
    cafeId: {
      type: String
    }
  },
  {
    timestamps: { 
      createdAt: 'created_at' 
    } 
  }
)

exports.cakeSchema = cakeSchema;
module.exports = mongoose.model('cakeModel', cakeSchema)
