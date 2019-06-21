import { fetchCourses, clearCourses } from '../courses/actions'

export const Types = {
  UPDATE_FILTER: 'UPDATE_FILTER'
}

const API_FIELDS = [
  'department_code',
  'terms_offered',
  'general_education',
  'credit_hours'
]

export const updateFilter = (filter, value) => {
  if (API_FIELDS.contains(filter)) {
    return dispatch => {
      dispatch({
        type: Types.UPDATE_FILTER,
        api_field: true,
        filter: filter,
        value: value
      })
      dispatch(clearCourses())
      dispatch(fetchCourses())
    }
  } else {
    return {
      type: Types.UPDATE_FILTER,
      api_field: false,
      filter: filter,
      value: value
    }
  }
}
