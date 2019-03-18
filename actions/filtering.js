import * as Types from '../constants/ActionTypes'
import { fetchCourseBatch, clearCourses } from './courses'

export const updateKeywords = (keywords) => {
  return dispatch => {
    dispatch(clearCourses())
    dispatch(fetchCourseBatch(0, keywords))
    dispatch({
      type: Types.UPDATE_KEYWORDS,
      keywords: keywords
    })
  }
}

export const updateFilter = (filter, value) => {
  return {
    type: Types.UPDATE_FILTER,
    filter: filter,
    value: value
  }
}
