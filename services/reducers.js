import { combineReducers } from 'redux'
import courses from './courses/reducers'
import filtering from './filtering/reducers'

export default combineReducers({
  courses,
  filtering
})
