import React from 'react'
import { connect } from 'react-redux'
import { fetchCourseBatch,
  incrementBatchNumber as incrementBatchNumberAction } from '../actions'

import Layout from '../components/Layout'
import Masonry from 'react-masonry-component'
import CourseCard from '../components/CourseCard'
import Searchbar from '../containers/Searchbar/'
import KeywordDisplay from '../containers/KeywordDisplay/'

import './explore.scss'

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }
  componentDidMount() {
    const { loadCoursesBatch, courses, keywords} = this.props
    loadCoursesBatch(courses.batchNumber, keywords)
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const { loadCoursesBatch, incrementBatchNumber,
      courses, keywords, batchNumber} = this.props
    if (process.browser) {
      if (window.innerHeight + window.scrollY
        >= (document.body.offsetHeight - 500)) {
        if (!courses.isFetching) {
          if (batchNumber < 5) {
            loadCoursesBatch(batchNumber, keywords)
            incrementBatchNumber()
          }
        }
      }
    }


  }
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row searchbar-container">
            <Searchbar />
          </div>
          <div className="col-md-12">
            <KeywordDisplay className="container"/>
          </div>
          <div className="row">
            <div className="container">
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
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses,
  courseList: state.courseList,
  keywords: state.keywords,
  batchNumber: state.batchNumber
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCoursesBatch: (batch, keywords) => {
    dispatch(fetchCourseBatch(batch, keywords))
  },
  incrementBatchNumber: () => {
    dispatch(incrementBatchNumberAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage)
