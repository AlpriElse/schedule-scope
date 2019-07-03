import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { updateFilter as updateFilterAction } from '../../services/filters/actions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import useSearchForm from './services/SearchFormHook'
import Suggestions from './components/Suggestions/'

const Searchbar = (props) => {
  const addFilter = (suggestion) => {
    let { updateFilter } = props
    console.log('addFilter', suggestion)
    // updateFilter(filter, value)
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

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2}}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <InputGroup className="mb-3">
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  type="text"
                  value={input}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}/>
              </InputGroup>
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
