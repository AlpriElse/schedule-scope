import React, { Component } from 'react'
import { connect } from 'react-redux'

import './filter.scss'

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
                className="btn btn-secondary"
                type="button"
                onClick={this.handleSubmit}>Apply</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default connect()(Filter)
