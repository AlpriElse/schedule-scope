import * as Types from '../constants/ActionTypes'
import { initialState } from '../redux/initialState'

const courses = (state = initialState, action) => {
  switch(action.type) {
    case Types.UPDATE_KEYWORDS:
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
    default:
      return state
  }
}

export default courses
