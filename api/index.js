const Course = require('../mongo/models/Course')

const api = require('express').Router()


api.get('/course?', (req, res) => {
  const query = {number: 100}

  console.log(req.query.number)

  if (req.query.number !== undefined) {
    query.number = req.query.number
  }

  Course.find(query, (err, courses) => {
    res.json(courses)
  })
})

module.exports = api
