const mongoose = require('mongoose')

const reviewSchema = require('./review')

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  album: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Song', songSchema)
