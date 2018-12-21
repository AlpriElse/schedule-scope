import {
  ADD_COURSE,
  ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH,
  UPDATE_FILTER } from '../constants/ActionTypes'
import { initialState } from '../redux/initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return Object.assign({}, state, {
        courseList: state.courseList.concat(action.course)
      })
    case ADD_COURSE_BATCH:
      return Object.assign({}, state, {
        courseList: state.courseList.concat(action.batch)
      })
    case FETCH_COURSE_BATCH.REQUEST:
      return Object.assign({}, state, {
        courses: {
          ...state.courses,
          isFetching: true
        }
      })
    case FETCH_COURSE_BATCH.SUCCESS:
      return Object.assign({}, state, {
        courses: {
          ...state.courses,
          isFetching: false
        }
      })
    case UPDATE_FILTER:
      state.filters[action.filter] = action.value
      return Object.assign({}, state)
    default:
      return state
  }
}
export default reducer
