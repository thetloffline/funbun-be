const mongoose = require('mongoose')

const cakeSchema = mongoose.Schema(
  {
    cafe_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    price: {
      type: Number,
      trim: true
    },
    looks: {
      type: Number,
      trim: true
    },
    bun: {
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
    }
  },
  {
    timestamps: { 
      createdAt: 'created_at' 
    } 
  }
)

// exports.cakeSchema = cakeSchema;
module.exports = mongoose.model('cake', cakeSchema)
