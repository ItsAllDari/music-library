const express = require('express')
const passport = require('passport')
const router = express.Router()

const Song = require('./../models/song')

const customErrors = require('./../../lib/custom_errors')
const handle404 = customErrors.handle404

const requireToken = passport.authenticate('bearer', { session: false })

// CREATE
// POST /reviews/
router.post('/reviews', requireToken, (req, res, next) => {
  // get the review data from the body of the request
  const reviewData = req.body.review
  const songId = reviewData.songId
  Song.findById(songId)
    .then(handle404)
    .then(song => {
      song.reviews.push(reviewData)
      return song.save()
    })
    .then(song => res.status(201).json({song: song}))
    .catch(next)
})

module.exports = router
