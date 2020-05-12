const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId
    },
    looks: {
      type: Number,
      trim: true
    },
    taste: {
      type: Number,
      trim: true
    },
    comment: {
      type: String,
      trim: true
    },
    productImage: {
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

exports.feedbackSchema = feedbackSchema
module.exports = mongoose.model('feedback', feedbackSchema)
