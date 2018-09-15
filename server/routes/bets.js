const express = require('express')

const db = require('../db')

const router = express.Router()

router.use(express.json())

// API client is posting us the new bet
// We are passing the new bet to the db function
// to run.
router.post('/addbet', (req, res) => {
  const bet = req.body
  db.addBets(bet)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/members', (req, res) => {
  db.getMembers()
    .then(members => {
      res.json({members})
    })
})

// API client has requested getBets from server
// we are requesting a response from the db now
// we want the response to be a json object
router.get('/', (req, res) => {
  db.getBets()
    .then(bets => {
      res.json({bets})
    })
})

// API client has sent a betID through params
router.delete('/:id', (req, res) => {
  const betId = req.params.id
  db.deleteBet(betId)
    .then(() => {
      res.json({})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
