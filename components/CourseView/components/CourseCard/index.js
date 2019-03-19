import React from 'react'
import { assignColor } from './services/color'
import './CourseCard.scss'

const setBackground = (color) => ({
  backgroundColor: color
})

const CourseCard = (props) => {
  let course = props.course
  let {
    course_title,
    course_number,
    course_description,
    department_code } = course
  let title = `${department_code} ${course_number}`
  return (
    <div className="col-md-4">
      <div className="card course-card" data-aos="fade-up">
        <div className="card-body">
          <h5 className="card-title text-center mx-auto text-white course-label"
            style={setBackground(assignColor(course))}>{title}</h5>
          <p className="card-text course-name">{course_title}</p>
          <p className="card-text course-description">{course_description}</p>
        </div>
        <div className="overlay" style={setBackground(assignColor(course))}>
          <div>
            <div className="text-center text-white overlay-text">{title}</div>
            <br/>
            <div className="overlay-container">
              <button className="btn btn-outline-light">Show Me Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
