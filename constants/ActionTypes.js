var createAsyncActionStrings = function createAsyncActionStrings(action) {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE"
  }
}
export const CLEAR_COURSES = "CLEAR_COURSES"
export const UPDATE_KEYWORDS = "UPDATE_KEYWORDS"
export const INCREMENT_BATCH_NUMBER = "INCREMENT_BATCH_NUMBER"

export const UPDATE_FILTER = "UPDATE_FILTER"

export const ADD_COURSE = "ADD_COURSE"
export const ADD_COURSE_BATCH = "ADD_COURSE_BATCH"

export const FETCH_COURSE_BATCH = createAsyncActionStrings("FETCH_COURSE_BATCH")
