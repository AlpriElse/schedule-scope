import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateKeywords as updateKeywordsAction } from '../../actions'

import './Keyword.scss'

class Keyword extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    let { keyword, keywords, updateKeywords} = this.props
    let newKeywords = keywords.slice(0)

    let idx = -1;
    for (let i = 0; i < keywords.length; i++) {
      if (newKeywords[i].word == keyword) {
        idx = i;
        break;
      }
    }
    newKeywords.splice(idx, 1)
    updateKeywords(newKeywords)
  }

  render() {
    let { keyword } = this.props
    return (
      <div className="btn-group keyword">
        <a className="btn text-white">
          {
            keyword.type == "CUSTOM" ? `"${keyword.word}"` : `#${keyword.word}`
          }
        </a>
        <button className="btn text-white"
          onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateKeywords: (keywords) => {
    dispatch(updateKeywordsAction(keywords))
  }
})

const mapStateToProps = (state, ownProps) => ({
  keywords: state.keywords
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyword)
