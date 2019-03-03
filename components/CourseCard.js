
import React from 'react'
import  hash from 'js-hash-code'

const cardStyles = {
  marginBottom: "20px",
  borderRadius: "0",
  border: "none",
  backgroundColor: "rgb(255, 255, 255)"
}
const colors = [
  "#52A6FF",
  "#E87F3B",
  "#8FDE82",
  "#E5615B",
  "#E597D6",
  "#E5DB9F",
  "#9194E5",
  "#735A54"
]

const assignColor = (course) => {
  let code = hash(course.department_code + course.course_number)
  let color = colors[Math.abs(parseInt(code)) % colors.length]
  return color
}

const courseLabelStyle = (color) => ({
  backgroundColor: color,
  display: "inline-block",
  padding: "5px",
  fontWeight: "200"
})

const courseNameStyle = {
  fontWeight: "600"
}
const courseDescriptionStyle = {
  fontWeight: "300"
}
const overlay= (isVisible, color) => {
  if (isVisible) {
    return {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 1,
      transition: ".5s ease",
      backgroundColor: color,
      padding: -10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  } else {
    return {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 0,
      transition: ".5s ease",
      backgroundColor: color,
      padding: -10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
}
const overlaycontainer = {
  display: "flex",
  justifyContent: "center",
  alignItems:"center"
}
const overlayText = {
  fontWeight: "200",
  fontSize: "1.75em"
}

class CourseCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }
  mouseEnter () {
    this.setState({
      isHover: true
    })
  }
  mouseLeave () {
    this.setState({
      isHover: false
    })
  }
  render () {
    let course = this.props
    return (
      <div className="col-md-4">
        <div className="card" data-aos="fade-up" style={cardStyles} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className="card-body">
            <h5 className="card-title text-center mx-auto text-white" style={courseLabelStyle(assignColor(course))}>{course.department_code} {course.course_number}</h5>
            <p className="card-text" style={courseNameStyle}>{course.course_title}</p>
            <p className="card-text" style={courseDescriptionStyle}>{course.course_description}</p>
          </div>
          <div style={overlay(this.state.isHover, assignColor(course))}>
            <div>
              <div className="text-center text-white" style={overlayText}>{course.department_code} {course.course_number}</div>
              <br/>
              <div style={overlaycontainer}>
                <button className="btn btn-outline-light">Show Me Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default CourseCard
