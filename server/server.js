const path = require('path')
const express = require('express')

const betsRoutes = require('./routes/bets')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/bets', betsRoutes)

module.exports = server
