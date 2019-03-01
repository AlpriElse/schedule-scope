import React, { Component } from 'react'
import { connect } from 'react-redux'

import Keyword from '../Keyword'

import './KeywordDisplay.scss'

class KeywordDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="keywordDisplay">
        {
          this.props.keywords.map((keyword) => (
            <Keyword keyword={keyword} key={keyword}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    keywords: state.keywords
})

export default connect(mapStateToProps, undefined)(KeywordDisplay)
