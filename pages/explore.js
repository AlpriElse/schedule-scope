import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// import AppNav from '../components/AppNav/'
import Layout from '../components/Layout'
import Searchbar from '../scenes/Searchbar/'
// import KeywordDisplay from '../containers/KeywordDisplay/'
// import CourseView from '../components/CourseView/'

import './explore.scss'

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }
  componentDidMount() {
    // const { loadCoursesBatch, courses, keywords} = this.props
    // loadCoursesBatch(courses.batchNumber, keywords)
    // window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    // window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    // const { loadCoursesBatch, incrementBatchNumber,
    //   courses, keywords, batchNumber} = this.props
    // if (process.browser) {
    //   if (window.innerHeight + window.scrollY
    //     >= (document.body.offsetHeight - 500)) {
    //     if (!courses.isFetching) {
    //       if (batchNumber < 5) {
    //         loadCoursesBatch(batchNumber, keywords)
    //         incrementBatchNumber()
    //       }
    //     }
    //   }
    // }
  }
  render() {
    return (
      <Layout>
        <Container>
          {/*
            <div className="container">
              <AppNav/>
            </div>
          */}

          <Row className='searchbar-container'>
            <Searchbar />
          </Row>
          {/*
            <div className="col-md-12">
              <KeywordDisplay className="container"/>
            </div>
          <div className="row">
            <CourseView courseList={this.props.courseList}/>
          </div>
          */}
        </Container>
      </Layout>
    )
  }
}


export default ExplorePage
