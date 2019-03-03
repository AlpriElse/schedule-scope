import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addKeyword as addKeywordAction} from '../../actions'

import './Searchbar.scss'

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKeyword: "",
      suggestions: [],
      filteredSuggestions: [],
      showSuggestions: false,
      activeSuggestion: 0
    }
  }

  componentWillMount() {
    this.state.suggestions = [
      "Computer Science",
      "College of Engineering",
      "Mechanical Engineering",
      "Gies College of Business"
    ]
  }

  handleKeyDown = e => {
    switch(e.keyCode) {
      case 13:
        //  [Enter]
        this.setState(state => {
          if (state.activeSuggestion == 0) {
            this.props.addKeyword(`"${state.currentKeyword}"`)
          } else {
            this.props.addKeyword(`#${state.filteredSuggestions[state.activeSuggestion - 1]}`)
          }
          return {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            currentKeyword: ""
          }
        })
        break;
      case 40:
        //  [Down Arrow]
        console.log("called")
        this.setState(state => ({
          activeSuggestion: Math.min(state.filteredSuggestions.length,
            state.activeSuggestion + 1)
        }))
        break;
      case 38:
        //  [Up Arrow]
        this.setState(state => ({
          activeSuggestion: Math.max(0, state.activeSuggestion - 1)
        }))
        break;
    }
  }

  handleChange = e => {
    let currentKeyword = e.target.value
    this.setState(state => ({
      currentKeyword,
      filteredSuggestions: state.suggestions.filter(suggestion => (
        suggestion.toLowerCase().indexOf(currentKeyword.toLowerCase()) != -1
      )),
      showSuggestions: true,
      activeSuggestion: 0
    }))
  }

  handleClick = e => {
    this.setState(state => {

      return {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        currentKeyword: ""
      }
    })
  }

  render() {
    const {
      handleKeyDown,
      handleChange,
      handleClick,
      handleSubmit,
    } = this
    const {
      activeSuggestion,
      filteredSuggestions,
      showSuggestions,
      currentKeyword
    } = this.state

    let suggestionsComponent
    if (showSuggestions && currentKeyword.length != 0) {
      if (filteredSuggestions.length != 0) {
        suggestionsComponent = (
          <ul className="suggestions">
            <li className="suggestion-custom"
                key={currentKeyword}
                onClick={handleClick}>
              {`"${currentKeyword}"`}
            </li>
            {
              filteredSuggestions.map((suggestion, index) => {
                let className = ""
                index += 1
                if (index > 10) {
                  return
                }
                if (index == activeSuggestion) {
                  className = "suggestion-active"
                }
                return (
                  <li className={className}
                      key={suggestion}
                      onClick={handleClick}>
                    {`#${suggestion}`}
                  </li>
                )
              })
            }
          </ul>
        )
      } else {
        suggestionsComponent = (
          <ul className="suggestions">
            <li className="suggestion-custom"
                key={currentKeyword}
                onClick={handleClick}>
              {`"${currentKeyword}"`}
            </li>
          </ul>
        )
      }
    }


    return (
      <div className="col-md-12 row">
        <form className="col-md-8 offset-md-2"
          onSubmit={e => e.preventDefault()}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              value={currentKeyword}
              onChange={handleChange}
              onKeyDown={handleKeyDown}/>
          </div>
          {
            suggestionsComponent
          }
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

export default connect(undefined, mapDispatchToProps)(Searchbar)
