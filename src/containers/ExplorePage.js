import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import { fetchCourseBatch } from '../actions'
import CourseCard from '../components/CourseCard'

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
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      && !this.props.courses.isFetching) {
      this.props.loadCoursesBatch(this.props.courses.batchNumber++)
      console.log(this.props.courses.batchNumber)
    }
  }
  render() {
    return (
      <div className="container">
        <Masonry>
          {
            this.props.courseList.map((course) => {
              return (
                <CourseCard department_code={course.department_code}
                  course_number={course.course_number}
                  course_title={course.course_title}
                  course_description={course.course_description}/>
              )
            })
          }
        </Masonry>
      </div>
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
