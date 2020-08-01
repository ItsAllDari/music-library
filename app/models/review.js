const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true
  },
  rating: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = reviewSchema
