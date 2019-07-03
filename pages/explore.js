import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import AppNav from '../components/AppNav/'
import Layout from '../components/Layout'
import Searchbar from '../scenes/Searchbar/'
import KeywordDisplay from '../scenes/KeywordDisplay/'
// import CourseView from '../components/CourseView/'

import './explore.scss'

import styles from './explore.scss'

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
        <Container className={styles.marginTop}>
          {/*
            <div className="container">
              <AppNav/>
            </div>
          */}

          <Row className='searchbar-container'>
            <Searchbar />
          </Row>
          <Row>
            <Col md={12}>
            {

              /* <KeywordDisplay/> */
            }
            </Col>
          </Row>
          {/*
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
