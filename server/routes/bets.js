const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBets()
    .then(bets => {
      res.json({bets})
    })
})

router.post('/addbet', (req, res) => {
  const bets = req.body
  db.addBets(bets)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
