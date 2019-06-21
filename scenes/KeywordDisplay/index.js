import React, { Component } from 'react'
import { connect } from 'react-redux'

import Keyword from './component/Keyword/'

import './KeywordDisplay.scss'

class KeywordDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let { keywords } = this.props
    let keywordsList
    if (keywords.length == 0) {
      keywordsList = (
        <p className="text-center">add filtering keywords with the searchbar</p>
      )
    } else {
      keywordsList = keywords.map((keyword) => (
        <Keyword keyword={keyword} key={keyword.word}/>
      ))
    }
    return (
      <div className="keywordDisplay">
        {
          keywordsList
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    filters: state.filters
})

export default connect(mapStateToProps, undefined)(KeywordDisplay)
