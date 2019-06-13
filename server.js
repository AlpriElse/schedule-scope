require('dotenv').config()

const express = require('express')
const cors = require('cors')
const next = require('next')
const port = process.env.PORT || 5000;

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const api = require('./api')

nextApp.prepare()
.then(() => {

  const app = express()
  app.use(cors())
  app.use('/api', api)


  app.get('*', (req, res) => {
    handle(req, res)
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })

})
