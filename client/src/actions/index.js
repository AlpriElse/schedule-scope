import {
  ADD_COURSE,
  ADD_COURSE_BATCH,
  FETCH_COURSE_BATCH,
  UPDATE_FILTER} from '../constants/ActionTypes'


export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
})

const fetchCourseBatchRequest = () => ({
  type: FETCH_COURSE_BATCH.REQUEST
})

const fetchCourseBatchSuccess = () => ({
  type: FETCH_COURSE_BATCH.SUCCESS
})

const fetchCourseBatchFailure = (err) => ({
  type: FETCH_COURSE_BATCH.FAILURE,
  err
})


export const fetchCourseBatch = (batch) => (dispatch) => {
  dispatch(fetchCourseBatchRequest())
  return fetch('http://localhost:5000/api/courses/batch/' + batch).then(
    res => {
      dispatch(fetchCourseBatchSuccess)
      res.text().then((text) => {
        dispatch(fetchCourseBatchSuccess())
        dispatch(addCourseBatch(JSON.parse(text)))
      })
    },
    err => {
      dispatch(fetchCourseBatchFailure(err.data))
    }
  )
}

export const addCourse = (course) => ({
  type: ADD_COURSE,
  course
})

export const addCourseBatch = (batch) => ({
  type: ADD_COURSE_BATCH,
  batch
})
