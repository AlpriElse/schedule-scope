const cors = require('cors')
const express = require('express')
const app = express()
let courses
require('./server/loadCourses').loadCourses((data) => {
  console.log("Courses Saved.")
  courses = data
})

app.use(cors())

app.get('/api/courses/batch/:batchNumber', function (req, res) {
  let batch_size = 9
  let batch = req.params.batchNumber
  let offset = batch_size * batch
  res.json(courses.slice(offset, offset + batch_size))
})

app.listen(5000, () => {
  console.log("Listening on PORT 5000")
})
