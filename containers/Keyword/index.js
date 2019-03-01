import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeKeyword as removeKeywordAction } from '../../actions'

import './Keyword.scss'

class Keyword extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.removeKeyword(this.props.keyword)
  }

  render() {
    return (
      <div className="btn-group keyword">
        <a className="btn btn-light">
          {this.props.keyword}
        </a>
        <button className="btn btn-light"
          onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeKeyword: (keyword) => {
    dispatch(removeKeywordAction(keyword))
  }
})

export default connect(undefined, mapDispatchToProps)(Keyword)
