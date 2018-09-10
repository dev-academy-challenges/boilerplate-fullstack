const express = require('express')

const db = require('../db')

const router = express.Router()

router.post('/addbet', (req, res) => {
  const newbets = req.body
  db.addBets(newbets)
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

router.get('/', (req, res) => {
  db.getBets()
    .then(bets => {
      res.json({bets})
    })
})

module.exports = router
