import {
  ADD_COURSE,
  ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH,
  UPDATE_FILTER,
  UPDATE_KEYWORDS,
  INCREMENT_BATCH_NUMBER } from '../constants/ActionTypes'

import { initialState } from '../redux/initialState'

const reducer = function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState
  let action = arguments[1]
  switch (action.type) {
    case UPDATE_KEYWORDS:
      return Object.assign({}, state, {
        keywords: action.keywords,
        courses: {
          isFetching: false,
          ready: false,
          batchNumber: 0
        },
        courseList: [],
        batchNumber: 0
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
        courses: Object.assign({}, state.courses, {
          isFetching: true
        })
      })
    case FETCH_COURSE_BATCH.SUCCESS:
      return Object.assign({}, state, {
        courses: Object.assign({}, state.courses, {
          isFetching: false
        })
      })
    case INCREMENT_BATCH_NUMBER:
      return Object.assign({}, state, {
        batchNumber: state.batchNumber + 1
      })
    default:
      return state
  }
};
export default reducer
