const express = require('express')
const passport = require('passport')
const router = express.Router()

const Song = require('./../models/song')

const customErrors = require('./../../lib/custom_errors')
const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

// CREATE new review info
router.post('/songs/:songId/reviews', (req, res, next) => {
  const reviewData = req.body.review
  const songId = req.params.songId

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

// SHOW show one review
router.get('/songs/:songId/reviews/:reviewId', requireToken, (req, res, next) => {
  const songId = req.params.songId
  const reviewId = req.params.reviewId
  Song.findById(songId)
    .then(handle404)
    .then(song => {
      let review = song.reviews.id(reviewId)
      review = handle404(review)
      res.status(200).json({review: review})
    })
    .catch(next)
})

// UPDATE review info
router.patch('/songs/:songId/reviews/:reviewId', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.review.owner

  const reviewId = req.params.reviewId
  const reviewData = req.body.review
  const songId = req.params.songId

  Song.findById(songId)
    .then(handle404)
    .then(song => {
      requireOwnership(req, song)
      song.reviews.id(reviewId).set(reviewData)
      return song.save()
    })
    .then(song => res.status(200).json({song: song}))
    .catch(next)
})

// DELETE single review
router.delete('/songs/:songId/reviews/:reviewId', requireToken, (req, res, next) => {
  const songId = req.params.songId
  // const itemData = req.body.item
  const reviewId = req.params.reviewId

  Song.findById(songId)
    .then(handle404)
    .then(song => {
      requireOwnership(req, song)
      song.reviews.id(reviewId).remove()
      return song.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
