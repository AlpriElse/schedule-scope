import { Types } from './actions'
import { initialState } from '../../redux/initialState'

const courses = (state = initialState, action) => {
  switch(action.type) {
    case Types.FETCH_COURSES.REQUEST:
      return Object.assign({}, state, {
        courses: Object.assign({}, state.courses, {
          isFetching: true,
          isReady: false
        })
      })
    case Types.FETCH_COURSES.SUCCESS:
      return Object.assign({}, state, {
        courses: Object.assign({}, {
          isFetching: false,
          list: action.courses
        })
      })
    case Types.CLEAR_COURSES:
      return Object.assign({}, state, {
        courseList: []
      })
    default:
      return state
  }
}

export default courses
