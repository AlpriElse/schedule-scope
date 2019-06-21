import React from 'react'
import classNames from 'classnames'

import ListGroup from 'react-bootstrap/ListGroup'

import styles from './Suggestions.scss'

const Suggestions = (props) => {
  let {
    input,
    suggestions,
    activeSuggestion,
    handleClick
  } = props

  let i = 0

  let suggestionsList = suggestions.map((group, index) => {
    let section = (
      <ListGroup.Item
        as='li'
        key={group.type}
        className={styles.section}>
        <strong>{group.type}</strong>
      </ListGroup.Item>
    )
    return (
      <>
        {section}
        {
          group.keywords.map(keyword => {
            i += 1
            return (
              <ListGroup.Item
                as='li'
                key={keyword.name}
                onClick={() => handleClick()}
                className={
                  classNames(styles.item, {
                    [styles.selected]: activeSuggestion === i
                  })
                }>
                {keyword.name}
              </ListGroup.Item>
            )
          })
        }
      </>
    )
  })

  return (
    <>
      <ListGroup
        as='ul'
        className={classNames(styles.float, styles.suggestions)}>
        <ListGroup.Item
          as='li'
          key='input'
          className={
            classNames(styles.item, {
              [styles.selected]: activeSuggestion === 0
            })
          }>
          {`"${input}"`}
        </ListGroup.Item>
        {
          suggestionsList
        }
      </ListGroup>
    </>
  )
}

export default Suggestions
