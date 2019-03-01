import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addKeyword as addKeywordAction} from '../../actions'

import './Filter.scss'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKeyword: ""
    }
  }

  handleChange = (e) => {
    this.setState(({
      currentKeyword: e.target.value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addKeyword(this.state.currentKeyword)
    this.setState(currState => ({
      currentKeyword: ""
    }))
  }

  render() {
    return (
      <div className="col-md-12 row">
        <form className="col-md-8 offset-md-2"
          onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              value={this.state.currentKeyword}
              onChange={this.handleChange}/>
            <div className="input-group-append">
              <button
                id="button-addon2"
                className="btn btn-light"
                type="button"
                onClick={this.handleSubmit}>Apply</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addKeyword: (keyword) => {
    dispatch(addKeywordAction(keyword))
  }
})

export default connect(undefined, mapDispatchToProps)(Filter)
