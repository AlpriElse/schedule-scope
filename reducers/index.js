import { combineReducers } from 'redux'
import courses from './courses'
import filtering from './filtering'

export default combineReducers({
  courses,
  filtering
})
