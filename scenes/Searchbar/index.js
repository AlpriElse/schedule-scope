import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { updateFilter as updateFilterAction } from '../../services/filters/actions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import useSearchForm from './services/SearchFormHook'
import Suggestions from './components/Suggestions/'

const Searchbar = (props) => {
  const addFilter = (filter, value) => {
    let { updateFilter } = this.props
    updateFilter(filter, value)
  }

  let {
    input,
    showSuggestions,
    filteredSuggestions,
    activeSuggestion,
    handleSubmit,
    handleChange,
    handleKeyDown,
    handleClick
  } = useSearchForm(addFilter)
  console.log(filteredSuggestions)
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2}}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}/>
            </Form.Group>
          </Form>
          {
            showSuggestions && (
              <Suggestions
                input={input}
                suggestions={filteredSuggestions}
                activeSuggestion={activeSuggestion}
                handleClick={handleClick}/>
            )
          }
        </Col>
      </Row>
    </Container>
  )
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  updateFilter: (keywords) => {
    dispatch(updateFilterAction(keywords))
  }
})

export default connect(mapDispatchToProps)(Searchbar)
