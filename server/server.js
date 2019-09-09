const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const s3 = require('./routes/s3')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/s3', s3)

module.exports = server
