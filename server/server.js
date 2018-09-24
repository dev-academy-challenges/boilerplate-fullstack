const path = require('path')
const express = require('express')

const betsRoutes = require('./routes/bets')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
// This is to specify the api route (this will be
// the '/' route on the server)
server.use('/api/v1/bets', betsRoutes)

module.exports = server
