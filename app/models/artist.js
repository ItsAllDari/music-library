const mongoose = require('mongoose')
const albumSchema = require('./album')

const artistSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  albums: [albumSchema],
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Artists', artistSchema)
