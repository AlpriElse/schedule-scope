import React from 'react'
import Masonry from 'react-masonry-component'
import CourseCard from './components/CourseCard/'

const CourseView = (props) => {
  let { courseList } = props
  if (courseList.length === 0) {
    return (
      <div className="container text-center text-white">
        <p>No courses found</p>
      </div>
    )
  }
  return (
    <div className="container">
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
    </div>
  )
}
export default CourseView
