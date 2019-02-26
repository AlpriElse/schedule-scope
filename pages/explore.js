import React from 'react'
import { connect } from 'react-redux'
import { fetchCourseBatch } from '../actions'

import Layout from '../components/Layout'
import Masonry from 'react-masonry-component'
import CourseCard from '../components/CourseCard'
import Filter from '../containers/Filter'

import {
  Container,
  Row
} from 'reactstrap'

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      batchNumber: 0
    }
    this.onScroll = this.onScroll.bind(this)
  }
  componentDidMount() {
    this.props.loadCoursesBatch(this.props.courses.batchNumber)
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (process.browser) {
      console.log(document.body.offsetHeight + document.body.scrollTop)
      console.log(document.body.scrollHeight)
      if (document.body.offsetHeight + document.body.scrollTop
          > document.body.scrollHeight - 400 && !this.props.courses.isFetching) {
        this.props.loadCoursesBatch(this.props.courses.batchNumber++)
        console.log(this.props.courses.batchNumber)
      }
    }


  }
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Filter />
          </Row>
          <Row>
            <Container>
              <Masonry>
                {
                  this.props.courseList.map((course) => {
                    if (course.department_code == undefined) {
                      console.log(course)
                    }
                    return (
                      <CourseCard department_code={course.department_code}
                        course_number={course.course_number}
                        course_title={course.course_title}
                        course_description={course.course_description}
                        key={course.department_code + course.course_number}/>
                    )
                  })
                }
              </Masonry>
            </Container>
          </Row>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses,
  courseList: state.courseList
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCoursesBatch: (batch) => {
    dispatch(fetchCourseBatch(batch))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage)
