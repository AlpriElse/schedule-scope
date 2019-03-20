import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'

import AppNav from '../components/AppNav/'
import Layout from '../components/Layout'

class MySchedule extends Component {
  render() {
    return (
      <Layout>
        <Container>
            <AppNav/>
        </Container>
      </Layout>
    )
  }
}

export default MySchedule
