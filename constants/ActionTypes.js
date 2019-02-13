var createAsyncActionStrings = function createAsyncActionStrings(action) {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE"
  };
};

export var UPDATE_FILTER = "UPDATE_FILTER";
export var ADD_COURSE = "ADD_COURSE";
export var ADD_COURSE_BATCH = "ADD_COURSE_BATCH";

export var FETCH_COURSE_BATCH = createAsyncActionStrings("FETCH_COURSE_BATCH");