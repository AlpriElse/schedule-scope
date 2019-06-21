import { combineReducers } from 'redux'
import courses from './courses/reducers'
import filters from './filters/reducers'

export default combineReducers({
  courses,
  filters
})
