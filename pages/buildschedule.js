import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppNav from '../components/AppNav/'
import Layout from '../components/Layout'

class BuildSchedule extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
            <AppNav/>
        </div>
      </Layout>
    )
  }
}
