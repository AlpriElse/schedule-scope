const createAsyncActionStrings = (action) => {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE"
  }
}

export default createAsyncActionStrings
