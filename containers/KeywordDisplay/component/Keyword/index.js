import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateKeywords as updateKeywordsAction } from '../../../../services/filtering/actions'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

import './Keyword.scss'

class Keyword extends Component {
  handleClick = () => {
    let { keyword, keywords, updateKeywords} = this.props
    let newKeywords = keywords.slice(0)

    let idx = -1;
    for (let i = 0; i < keywords.length; i++) {
      if (newKeywords[i].name === keyword.name) {
        newKeywords.splice(i, 1)
        updateKeywords(newKeywords)
        return
      }
    }
  }

  render() {
    let { keyword } = this.props
    return (
      <ButtonGroup className="keyword">
        <Button className="text-white">
          {
            keyword.type == "CUSTOM" ? `"${keyword.name}"` : `#${keyword.name}`
          }
        </Button>
        <Button className="text-white"
          onClick={this.handleClick}>X</Button>
      </ButtonGroup>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateKeywords: (keywords) => {
    dispatch(updateKeywordsAction(keywords))
  }
})

const mapStateToProps = (state, ownProps) => ({
  keywords: state.filtering.keywords
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyword)
