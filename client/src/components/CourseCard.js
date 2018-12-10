import React from 'react'

const cardStyles = {
  marginBottom: "20px",
  borderRadius: "0"
}

const CourseCard = (course) => (
  <div className="col-md-4">
    <div className="card" data-aos="fade-up" style={cardStyles}>
      <div className="card-body">
        <h5 className="card-title text-center">{course.department_code} {course.course_number}</h5>
        <p className="card-text text-center">{course.course_title}</p>
        <p className="card-text">{course.course_description}</p>
      </div>
    </div>
  </div>
)

export default CourseCard
