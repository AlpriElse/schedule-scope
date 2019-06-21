import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DEFAULT_SUGGESTION = -1

const useSearchForm = (addFilter) => {
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeSuggestion, setActiveSuggestion] = useState(DEFAULT_SUGGESTION)
  const [suggestions, setSuggestions] = useState(undefined)

  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions)

  useEffect(() => {
    if (suggestions === undefined) {
      axios.get('/static/data/keywords.json').then(res => {
        setSuggestions(res.data)
      })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    setShowSuggestions(e.target.value !== '')
    setActiveSuggestion(DEFAULT_SUGGESTION)

    //   Filter Suggestions
    let newFilteredSuggestions = []
    let temp = {}
    let numItems = 0
    suggestions.forEach(category => {
      category.keywords.forEach(keyword => {
        for (let i = 0; i < keyword.aliases.length; i++) {
          let alias = keyword.aliases[i]
          if (alias.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
            if (temp.type === undefined) {
              temp.type = category.type
              temp.keywords = [keyword]
            } else {
              if (numItems < 10) {
                temp.keywords.push(keyword)
                numItems += 1
              }
            }
            break
          }
        }
      })
      if (temp.type !== undefined) {
        newFilteredSuggestions.push(temp)
        temp = {}
      }
    })
    setFilteredSuggestions(newFilteredSuggestions)

  }

  const handleKeyDown = (e) => {

    switch(e.keyCode) {
      case 13:
        //  [Enter]
        if (activeSuggestion === 0) {
          addFilter('user', currentInput)
        } else {
          let { filter, value } = suggestions[activeSuggestion - 1]
          addFilter(field, value)
        }
        setCurrentInput('')
        setActiveSuggestion(0)
        setShowSuggestions(false)
        setSuggestions([])

        break;
      case 40:
        //  [Down Arrow]
        let len = 0
        filteredSuggestions.forEach(type => {
          len += type.keywords.length
        })
        setActiveSuggestion(Math.min(len, activeSuggestion + 1))
        console.log(len, activeSuggestion)
        break;
      case 38:
        //  [Up Arrow]
        setActiveSuggestion(Math.max(DEFAULT_SUGGESTION, activeSuggestion - 1))
        console.log(activeSuggestion)
        break;
    }
  }

  const handleClick = (suggestion) => {
    let { filter, value } = suggestion
    addFilter(filter, value)
    setShowSuggestions(false)
    setActiveSuggestion(DEFAULT_SUGGESTION)
    setCurrentInput('')
    setSuggestions([])
  }

  return {
    handleSubmit,
    handleChange,
    handleClick,
    handleKeyDown,
    filteredSuggestions,
    showSuggestions,
    activeSuggestion,
    input
  }
}

export default useSearchForm
