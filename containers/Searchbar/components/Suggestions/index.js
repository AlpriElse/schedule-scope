import React from 'react'
import './Suggestions.scss'

const Suggestions = (props) => {
  let {
    currentKeyword,
    filteredSuggestions,
    activeSuggestion,
    handleClick
  } = props

  let suggestionsList = filteredSuggestions.map((suggestion, index) => {
    let className = ""
    if (index > 10) {
      return
    }
    if (index + 1 == activeSuggestion) {
      className = "suggestion-active"
    }
    return (
      <li className={className}
          key={suggestion}
          onClick={() => handleClick("SUGGESTION", suggestion)}>
        {`#${suggestion}`}
      </li>
    )
  })
  let customSuggestionClass = activeSuggestion == 0 ?
    "suggestion-active" : "suggestion-custom"
  return (
    <ul className="suggestions">
      <li
        className={customSuggestionClass}
        key={currentKeyword}
        onClick={() => handleClick("CUSTOM", currentKeyword)}>
        {`${currentKeyword}`}
      </li>
      {
        suggestionsList
      }
    </ul>
  )
}

export default Suggestions
