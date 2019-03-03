import axios from 'axios'

import {
  ADD_COURSE,
  ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH,
  UPDATE_FILTER,
  UPDATE_KEYWORDS,
  REMOVE_KEYWORD,
  INCREMENT_BATCH_NUMBER } from '../constants/ActionTypes';

export const updateKeywords = (keywords) => {
  return dispatch => {
    dispatch(fetchCourseBatch(0, keywords))
    dispatch({
      type: UPDATE_KEYWORDS,
      keywords: keywords
    })
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

export const fetchCourseBatch = (batch, keywords) => {
  return dispatch => {
    dispatch(fetchCourseBatchRequest())
    return axios({
      url: '/api/courses/batch/' + batch,
      params: {
        keywords: keywords
      }
    }).then(res => {
      dispatch(fetchCourseBatchSuccess())
      dispatch(addCourseBatch(res.data))
    }).catch(err => {
      dispatch(fetchCourseBatchFailure(err.data))
    })
  }
}

export const addCourse = (course) => {
  return {
    type: ADD_COURSE,
    course: course
  }
}

export const addCourseBatch = (batch) => {
  return {
    type: ADD_COURSE_BATCH,
    batch: batch
  }
}

export const incrementBatchNumber = () => {
  return {
    type: INCREMENT_BATCH_NUMBER
  }
}
