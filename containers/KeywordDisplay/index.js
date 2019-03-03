import React, { Component } from 'react'
import { connect } from 'react-redux'

import Keyword from '../Keyword'

import './KeywordDisplay.scss'

class KeywordDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let keywords
    if (this.props.keywords.length == 0) {
      keywords = (
        <p className="text-center text-white">add filtering keywords with the searchbar</p>
      )
    } else {
      keywords = this.props.keywords.map((keyword) => (
        <Keyword keyword={keyword} key={keyword}/>
      ))
    }
    return (
      <div className="keywordDisplay">
        {
          keywords
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    keywords: state.keywords
})

export default connect(mapStateToProps, undefined)(KeywordDisplay)
