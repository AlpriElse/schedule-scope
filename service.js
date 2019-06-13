require('dotenv').config()

const express = require('express')
const port = process.env.PORT || 5000;

const app = express()
const api = require('./api')
const db = require('./mongo/db.js')

app.use('/api', api)

app.get('/*', (req, res) => {
  res.send('The api lives!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
