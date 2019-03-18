import * as Types from '../constants/ActionTypes'
import { initialState } from '../redux/initialState'

const courses = (state = initialState, action) => {
  switch(action.type) {
    case Types.ADD_COURSE:
      return Object.assign({}, state, {
        courseList: state.courseList.concat(action.course)
      })
    case Types.ADD_COURSE_BATCH:
      return Object.assign({}, state, {
        courseList: state.courseList.concat(action.batch)
      })
    case Types.FETCH_COURSE_BATCH.REQUEST:
      return Object.assign({}, state, {
        courses: Object.assign({}, state.courses, {
          isFetching: true
        })
      })
    case Types.FETCH_COURSE_BATCH.SUCCESS:
      return Object.assign({}, state, {
        courses: Object.assign({}, state.courses, {
          isFetching: false
        })
      })
    case Types.INCREMENT_BATCH_NUMBER:
      return Object.assign({}, state, {
        batchNumber: state.batchNumber + 1
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
