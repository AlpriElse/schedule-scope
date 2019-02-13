const express = require('express')
const cors = require('cors')
const next = require('next')

const port = process.env.PORT || 5000;

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare()
.then(() => {

  const app = express()
  app.use(cors())
  
  app.get('/api/courses/batch/:batchNumber', (req, res) => {
    let batch_size = 9
    let batch = req.params.batchNumber
    let offset = batch_size * batch
    console.log("Batch", batch, "requested.")
    res.json(courses.slice(offset, offset + batch_size))
  })

  app.get('/api/subjects', (req, res) => {
    res.json(subjects)
  })

  app.get('*', (req, res) => {
    handle(req, res)
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })

})
