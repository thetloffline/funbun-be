const mongoose = require('mongoose')

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true
    },
    address: {
      type: String,
      trim: true,
      lowercase: true
    },
    products: {
      type: Array
    }
  },
  {
    timestamps: {
      createdAt: 'created_at'
    }
  }
)

exports.shopSchema = shopSchema
module.exports = mongoose.model('shop', shopSchema)
