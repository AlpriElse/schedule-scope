import {
  ADD_COURSE,
  ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH,
  UPDATE_FILTER } from '../constants/ActionTypes';
import { initialState } from '../redux/initialState';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ADD_COURSE:
      return Object.assign({}, state, {
        courseList: state.courseList.concat(action.course)
      });
    case ADD_COURSE_BATCH:
      return Object.assign({}, state, {
        courseList: state.courseList.concat(action.batch)
      });
    case FETCH_COURSE_BATCH.REQUEST:
      return Object.assign({}, state, {
        courses: Object.assign({}, state.courses, {
          isFetching: true
        })
      });
    case FETCH_COURSE_BATCH.SUCCESS:
      return Object.assign({}, state, {
        courses: Object.assign({}, state.courses, {
          isFetching: false
        })
      });
    case UPDATE_FILTER:
      state.filters[action.filter] = action.value;
      return Object.assign({}, state);
    default:
      return state;
  }
};
export default reducer;
