import React from 'react'
import Masonry from 'react-masonry-component'
import CourseCard from './components/CourseCard/'

const CourseView = (props) => {
  let { courseList } = props
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
