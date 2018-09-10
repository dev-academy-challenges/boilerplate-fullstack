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
  const newbets = req.body
  console.log('----', req.body)
  db.addBets(newbets)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
