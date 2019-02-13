const express = require('express')
const api = express.Router()

const { loadCourses, loadSubjects } = require('../server/load.js')

let courses = []
loadCourses().then(res => {
  courses = res
})
let subjects
loadSubjects().then(res => {
  subjects = res
})

api.get('/courses/batch/:batchNumber', (req, res) => {
  console.log("Hit")
  let batch_size = 9
  let batch = req.params.batchNumber
  let offset = batch_size * batch
  console.log("Batch", batch, "requested.")
  res.json(courses.slice(offset, offset + batch_size))
})

api.get('/subjects', (req, res) => {
  res.json(subjects)
})

module.exports = api
