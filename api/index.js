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
  if (keywords === undefined) {
    keywords = []
  } else {
    keywords = keywords.map(keyword => JSON.parse(keyword))
  }

  let filteredCourses = filterCourses(courses, keywords)
  res.json(filteredCourses.slice(offset, offset + batch_size))
})

api.get('/subjects', (req, res) => {
  res.json(subjects)
})

const filterCourses = (courses, keywords) => {
  if (keywords.length === 0) {
    return courses
  }

  //  Filter by department
  courses = courses.filter(course => {
    let shouldKeep = false
    deptKeywords = keywords.filter(keyword => keyword.type === "DEPARTMENT")
    for (let keyword of deptKeywords) {
      if (course.department_code === keyword.abbrev) {
        shouldKeep = true
        break
      }
    }
    customKeywords = keywords.filter(keyword => keyword.type === "CUSTOM")
    for (let keyword of customKeywords) {
      if (course.course_number.indexOf(keyword.name) != -1
        || course.course_description.indexOf(keyword.name) != -1
        || course.department.indexOf(keyword.name) != -1
        || course.department_code.indexOf(keyword.name) != -1
        || course.course_title.indexOf(keyword.name) != -1
        || course.course_number.indexOf(keyword.name) != -1
        || course.course_hours.indexOf(keyword.name) != -1) {
          continue
      }
      shouldKeep = false
    }
    return shouldKeep
  })
  return courses
}

module.exports = api
