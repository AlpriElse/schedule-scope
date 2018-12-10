const cors = require('cors')
const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

let courses
require('./server/loadCourses').loadCourses((data) => {
  console.log("Courses Saved.")
  courses = data
})

app.use(cors())

app.get('/api/courses/batch/:batchNumber', function (req, res) {
  console.log("Hit")
  let batch_size = 9
  let batch = req.params.batchNumber
  let offset = batch_size * batch
  res.json(courses.slice(offset, offset + batch_size))
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
