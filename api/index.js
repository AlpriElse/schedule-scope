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
  let batch_size = 9
  let batch = req.params.batchNumber
  let offset = batch_size * batch
  console.log("Batch", batch, "requested.")

  let keywords = req.query.keywords
  if (keywords == undefined) {
    keywords = []
  }
  res.json(courses.filter(course => {
    if (keywords.length == 0) {
      return true
    }

    for (let keyword of keywords) {
      let word = JSON.parse(keyword).word
      if (course.department.indexOf(word) != -1 ||
        course.department_code.indexOf(word) != -1 ||
        course.course_title.indexOf(word) != -1 ||
        course.course_number == parseInt(word) ||
        course.course_description.indexOf(word) != -1 ||
        course.course_hours.indexOf(word) != -1) {
          return true
        }
    }
    return false
  }).slice(offset, offset + batch_size))
})

api.get('/subjects', (req, res) => {
  res.json(subjects)
})

module.exports = api
