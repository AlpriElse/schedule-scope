const fetch = require('node-fetch')
const parse = require('csv-parse')
const columns = ["department","department_code","course_title","course_number","course_description","course_hours"]
const parser = parse({
  delimiter: ',',
  from_line: 2, // Skip label row,
  quote: true,
  columns
})

module.exports.loadCourses = (callback) => {
  let courses = []
  console.log("Fetching Courses...")
  fetch('http://localhost:3000/data/course-information.csv').then(
    res => {
      res.text().then((text) => {
        console.log("Parsing csv...")
        parser.write(text)
        parser.end()
        parser.on('readable', () => {
          let record = parser.read()
          let count = 0
          while (record) {
            count += 1
            if (count === 1) {
              continue
            }
            courses.push(record)
            record = parser.read()
          }
          console.log("Done loading courses.")
          callback(courses.sort((a, b) => {
            if (a.course_title < b.course_title) {
              return - 1
            } else {
              return 1
            }

          }))
        })
      })
    }
  )
}
