import { UPDATE_VIEW, ADD_COURSE, ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH } from '../constants/ActionTypes'
import { VIEWS } from '../constants/views'

const reducer = (state = {
  view: VIEWS.LANDING,
  courses: {
    isFetching: false,
    ready: false,
    batchNumber: 0
  },
  courseList: []
}, action) => {
  console.log(action)
  switch (action.type) {
    case UPDATE_VIEW:
      return Object.assign({}, state, {
        view: action.view
      })
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
    default:
      return state
  }
}
export default reducer
