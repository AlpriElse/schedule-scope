import axios from 'axios'
import createAsyncActionStrings from '../ActionStringCreator'

export const Types = {
  FETCH_COURSES: createAsyncActionStrings("FETCH_COURSES"),
  CLEAR_COURSES: "CLEAR_COURSES"
}

const fetchCoursesRequest = () => {
  return {
    type: Types.FETCH_COURSES.REQUEST
  }
}

const fetchCoursesSuccess = (courses) => {
  return {
    type: Types.FETCH_COURSES.SUCCESS,
    courses
  }
}

const fetchCoursesFailure = (err) => {
  return {
    type: Types.FETCH_COURSES.FAILURE,
    err: err
  }
}

export const fetchCourses = () => {
  return (dispatch, getState) => {
    let { filters: { api_fields }} = getState()
    dispatch(fetchCoursesRequest())
    return axios({
      url: '/api/courses/batch/' + batch,
      params: api_fields
    }).then(res => {
      dispatch(fetchCoursesSuccess(res.data))
    }).catch(err => {
      dispatch(fetchCoursesFailure(err.data))
    })
  }
}

export const clearCourses = () => {
  return {
    type: Types.CLEAR_COURSES
  }
}
