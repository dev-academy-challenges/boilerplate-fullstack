const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFruits()
    .then(results => {
      res.json({fruits: results.map(fruit => fruit.name)})
    })
})

module.exports = router
