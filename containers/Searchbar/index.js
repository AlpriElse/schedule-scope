import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateKeywords as updateKeywordsAction } from '../../actions/filtering'
import { fetchCourseBatch } from '../../actions/courses'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import Suggestions from './components/Suggestions/'

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
    axios.get("/static/data/keywords.json")
      .then(res => {
        this.setState({
          suggestions: res.data
        })
      })
  }
  addKeyword = (type, word) => {
    let { updateKeywords, keywords } = this.props
    let keyword
    if (type === "CUSTOM") {
      keyword = {
        type: "CUSTOM",
        name: word
      }
    } else {
      keyword = word
    }
    updateKeywords(keywords.concat(keyword))
  }

  handleKeyDown = e => {
    switch(e.keyCode) {
      case 13:
        //  [Enter]
        this.setState((state, props) => {
          let { updateKeywords, keywords } = props
          if (state.activeSuggestion == 0) {
            this.addKeyword("CUSTOM", state.currentKeyword)
          } else {
            this.addKeyword("SUGGESTION",
              state.filteredSuggestions[state.activeSuggestion - 1])
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
        suggestion.name.toLowerCase().indexOf(currentKeyword.toLowerCase()) != -1
          || suggestion.abbrev.toLowerCase().indexOf(currentKeyword.toLowerCase()) != -1
      )),
      showSuggestions: true,
      activeSuggestion: 0
    }))
  }

  handleClick = (type, keyword) => {
    let { keywords, updateKeywords, loadCoursesBatch } = this.props
    this.setState(state => {
      this.addKeyword(type, keyword)
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
      suggestionsComponent = (
        <Suggestions
          currentKeyword={currentKeyword}
          filteredSuggestions={filteredSuggestions}
          activeSuggestion={activeSuggestion}
          handleClick={handleClick}/>
      )
    }


    return (
      <Col md={12}>
        <Row>
          <Col md={8} className="offset-md-2">
            <Form onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={currentKeyword}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}/>
              </Form.Group>
              {
                suggestionsComponent
              }
            </Form>
          </Col>
        </Row>
      </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
