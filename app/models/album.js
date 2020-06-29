const mongoose = require('mongoose')
const songSchema = require('./song')

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  songs: [songSchema],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Albums', albumSchema)
