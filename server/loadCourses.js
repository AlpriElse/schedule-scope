const parse = require('csv-parse')
var fs = require('fs')

const course_columns = ["department","department_code","course_title","course_number","course_description","course_hours"]
const course_parser = parse({
  delimiter: ',',
  from_line: 2, // Skip label row,
  quote: true,
  columns: course_columns
})

const subject_columns = ["department","code","website","college_code"]
const subject_parser = parse({
  delimiter: ',',
  from_line: 2,
  quote: true,
  columns: subject_columns
})


const COURSE_INFORMATION_FILEPATH = "./data/course-information.csv"
const SUBJECT_INFORMATION_FILEPATH = "./data/subjects.csv"

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, text) => {
      if (err) {
        reject()
      }
      resolve(text)
    })
  })
}

module.exports.loadCourses = () => {
  return new Promise((resolve, reject) => {
    let courses = []
    console.log("Reading course information file.")

    readFile(COURSE_INFORMATION_FILEPATH).then(text => {
      console.log("Parsing course information csv file.")
      course_parser.write(text)
      course_parser.end()
      course_parser.on('readable', () => {
        let record = course_parser.read()
        let count = 0
        while (record) {
          count += 1
          courses.push(record)
          record = course_parser.read()
        }
        console.log("Done parsing course information.")
        courses.sort((a, b) => {
          return a.course_title - b.course_title
        })
        resolve(courses)
      })
    }).catch(err => {
      reject()
    })
  })
}

module.exports.loadSubjects = () => {
  return new Promise((resolve, reject) => {
    let subjects = []
    console.log("Reading subject information file.")
    readFile(SUBJECT_INFORMATION_FILEPATH).then(text => {
      console.log("Parsing subject information csv file.")
      subject_parser.write(text)
      subject_parser.end()
      subject_parser.on('readable', () => {
        let record = subject_parser.read()
        let count = 0
        while (record) {
          count += 1
          subjects.push(record)
          record = subject_parser.read()
        }
        console.log("Done parsing subject information.")
        subjects.sort((a,b) => {
          return a.department - b.department
        })
        resolve(subjects)
      })
    })
  })
}
