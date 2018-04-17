const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFruits()
    .then(fruits => {
      res.json({fruits})
    })
})

module.exports = router
