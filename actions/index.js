import { ADD_COURSE, ADD_COURSE_BATCH, FETCH_COURSE_BATCH, UPDATE_FILTER } from '../constants/ActionTypes';

export var updateFilter = function updateFilter(filter, value) {
  return {
    type: UPDATE_FILTER,
    filter: filter,
    value: value
  };
};

var fetchCourseBatchRequest = function fetchCourseBatchRequest() {
  return {
    type: FETCH_COURSE_BATCH.REQUEST
  };
};

var fetchCourseBatchSuccess = function fetchCourseBatchSuccess() {
  return {
    type: FETCH_COURSE_BATCH.SUCCESS
  };
};

var fetchCourseBatchFailure = function fetchCourseBatchFailure(err) {
  return {
    type: FETCH_COURSE_BATCH.FAILURE,
    err: err
  };
};

export var fetchCourseBatch = function fetchCourseBatch(batch) {
  return function (dispatch) {
    dispatch(fetchCourseBatchRequest());
    return fetch('http://localhost:5000/api/courses/batch/' + batch).then(function (res) {
      dispatch(fetchCourseBatchSuccess);
      res.text().then(function (text) {
        dispatch(fetchCourseBatchSuccess());
        dispatch(addCourseBatch(JSON.parse(text)));
      });
    }, function (err) {
      dispatch(fetchCourseBatchFailure(err.data));
    });
  };
};

export var addCourse = function addCourse(course) {
  return {
    type: ADD_COURSE,
    course: course
  };
};

export var addCourseBatch = function addCourseBatch(batch) {
  return {
    type: ADD_COURSE_BATCH,
    batch: batch
  };
};