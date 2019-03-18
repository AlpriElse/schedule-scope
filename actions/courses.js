import axios from 'axios'
import * as Types from '../constants/ActionTypes'

const fetchCourseBatchRequest = () => {
  return {
    type: Types.FETCH_COURSE_BATCH.REQUEST
  }
}

const fetchCourseBatchSuccess = () => {
  return {
    type: Types.FETCH_COURSE_BATCH.SUCCESS
  }
}

const fetchCourseBatchFailure = (err) => {
  return {
    type: Types.FETCH_COURSE_BATCH.FAILURE,
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
    type: Types.ADD_COURSE,
    course: course
  }
}

export const addCourseBatch = (batch) => {
  return {
    type: Types.ADD_COURSE_BATCH,
    batch: batch
  }
}

export const incrementBatchNumber = () => {
  return {
    type: Types.INCREMENT_BATCH_NUMBER
  }
}

export const clearCourses = () => {
  return {
    type: Types.CLEAR_COURSES
  }
}
