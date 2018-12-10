import React from 'react'
import { connect } from 'react-redux'
import { updateView } from '../actions'
import { VIEWS } from '../constants/views'

const LandingPage = (props) => {
  const goExplore = () => {
    props.updateView(VIEWS.EXPLORE)
  }
  return (
    <div className="container d-flex h-75 align-items-center">
      <div className="mx-auto text-center">
        <h2 className="text-white mx-auto mt-2 mb-5">Explore courses that interest you at the University of Illinois at Urbana-Champaign.</h2>
        <button onClick={goExplore} className="btn btn-primary js-scroll-trigger">Go Explore</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateView: (view) => {
      dispatch(updateView(view))
    }
  }
}

export default connect(null, mapDispatchToProps)(LandingPage)
