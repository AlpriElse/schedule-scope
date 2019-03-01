import {
  ADD_COURSE,
  ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH,
  UPDATE_FILTER,
  ADD_KEYWORD,
  REMOVE_KEYWORD } from '../constants/ActionTypes';

export const addKeyword = (keyword) => {
  return {
    type: ADD_KEYWORD,
    keyword: keyword
  }
}

export const removeKeyword = (keyword) => {
  return {
    type: REMOVE_KEYWORD,
    keyword: keyword
  }
}

export const updateFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter: filter,
    value: value
  }
}

const fetchCourseBatchRequest = () => {
  return {
    type: FETCH_COURSE_BATCH.REQUEST
  }
}

const fetchCourseBatchSuccess = () => {
  return {
    type: FETCH_COURSE_BATCH.SUCCESS
  }
}

const fetchCourseBatchFailure = (err) => {
  return {
    type: FETCH_COURSE_BATCH.FAILURE,
    err: err
  }
}

export const fetchCourseBatch = (batch) => {
  return function (dispatch) {
    dispatch(fetchCourseBatchRequest());
    return fetch('http://localhost:5000/api/courses/batch/' + batch).then(function (res) {
      dispatch(fetchCourseBatchSuccess);
      res.text().then(function (text) {
        dispatch(fetchCourseBatchSuccess());
        dispatch(addCourseBatch(JSON.parse(text)));
      })
    }, function (err) {
      dispatch(fetchCourseBatchFailure(err.data));
    })
  }
}

export const addCourse = (course) => {
  return {
    type: ADD_COURSE,
    course: course
  };
};

export const addCourseBatch = (batch) => {
  return {
    type: ADD_COURSE_BATCH,
    batch: batch
  };
};
