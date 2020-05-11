const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    shopId: {
      type: mongoose.Schema.Types.ObjectId
    },
    category: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true,
      lowercase: true
    },
    image: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      trim: true
    },
    feedback: {
      type: Array
    }
  },
  {
    timestamps: {
      createdAt: 'created_at'
    }
  }
)

exports.productSchema = productSchema
module.exports = mongoose.model('product', productSchema)
