let createAsyncActionStrings = (action) => {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE"
  }
}

export const UPDATE_FILTER = "UPDATE_FILTER"
export const ADD_COURSE = "ADD_COURSE"
export const ADD_COURSE_BATCH = "ADD_COURSE_BATCH"

export const FETCH_COURSE_BATCH = createAsyncActionStrings("FETCH_COURSE_BATCH")
