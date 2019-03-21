import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { assignColor } from './services/color'
import { trim } from './services/trim'
import './CourseCard.scss'

const setBackground = (color) => ({
  backgroundColor: color
})

class CourseCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = () => {
    this.setState(state => ({
      showModal: true
    }))
  }
  handleCloseModal = () => {
    this.setState(state => ({
      showModal: false
    }))
  }

  render() {
    let { showModal } = this.state
    let course = this.props.course
    let {
      course_title,
      course_number,
      course_description,
      department_code } = course
    let title = `${department_code} ${course_number}`
    return (
      <Col md={4}>
        <Card className="course-card" data-aos="fade-up">
          <Card.Body>
            <Card.Title className="text-center mx-auto text-white course-label"
              style={setBackground(assignColor(course))}>{title}</Card.Title>
            <Card.Text>
              <span className="course-name">{course_title}</span>
              <br/>
              <span className="course-description">{trim(course_description)}</span>
            </Card.Text>
          </Card.Body>
          <div className="overlay" style={setBackground(assignColor(course))}>
            <div>
              <div className="text-center text-white overlay-text">{title}</div>
              <br/>
              <div className="overlay-container">
                <Button variant="outline-light"
                  onClick={this.handleOpenModal}>Show Me Details</Button>
              </div>
            </div>
          </div>
        </Card>
        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{title + " " + course_title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{course_description}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    )
  }
}

export default CourseCard
