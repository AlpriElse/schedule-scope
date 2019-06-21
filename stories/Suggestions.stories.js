import React from 'react'
import 'bootstrap'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Suggestions from '../scenes/Searchbar/components/Suggestions/'

let suggestions = [
  {
    "type": "Department",
    "keywords": [
      {
        "name": "Asian American Studies",
        "aliases": [
          "Asian American Studies",
          "AAS"
        ],
        "token": "AAS"
      },
      {
        "name": "Agricultural and Biological Engineering",
        "aliases": [
          "Agricultural and Biological Engineering",
          "ABE"
        ],
        "token": "ABE"
      }
    ]
  },
  {
    "type": "General Education Requirements",
    "keywords": [
      {
        "name": "Humanities & the Arts",
        "aliases": [
          "Humanities & the Arts",
          "Humanities",
          "HUM"
        ],
        "token": "HUM"
      },
      {
        "name": "Cultural Studies",
        "aliases": [
          "Cultural Studies",
          "CS"
        ],
        "token": "CS"
      }
    ]
  }
]

storiesOf('Suggestions', module)
  .add('with text', () => (
    <Suggestions
      input={"hello world"}
      suggestions={suggestions}
      activeSuggestion={0}
      handleClick={() => console.log("clicked")}/>
  ))
