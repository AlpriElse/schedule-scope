import React from 'react'

import Container from 'react-bootstrap/Container'

import Masonry from 'react-masonry-component'
import CourseCard from './components/CourseCard/'

const CourseView = (props) => {
  let { courseList } = props
  if (courseList.length === 0) {
    return (
      <div className="container text-center">
        <p>No courses found</p>
      </div>
    )
  }
  return (
    <Container>
      <Masonry>
        {
          courseList.map((course) => {
            if (course.department_code == undefined) {
              console.log(course)
            }
            let key = course.department_code + course.course_number
            return (
              <CourseCard
                course={course}
                key={course.department_code + course.course_number}/>
            )
          })
        }
      </Masonry>
    </Container>
  )
}
export default CourseView
