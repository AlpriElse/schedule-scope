import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateView } from './actions'
import Page from './components/Page'

import { VIEWS } from './constants/views'
import LandingPage from './components/LandingPage'
import ExplorePage from './containers/ExplorePage'

class App extends Component {
  getView() {
    console.log(this.props.view)
    switch(this.props.view) {
      case VIEWS.LANDING:
        return (
          <LandingPage/>
        )
      case VIEWS.EXPLORE:
        return (
          <ExplorePage/>
        )
      default:
        return (
          <LandingPage/>
        )
    }
  }

  render() {
    return (
      <div className="App">
        <Page>
          {
            this.getView()
          }
        </Page>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    view: state.view,
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateView: (view) => {
      dispatch(updateView(view))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
