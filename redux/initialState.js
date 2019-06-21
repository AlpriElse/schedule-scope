export const initialState = {
  courses: {
    isFetching: false,
    isReady: false,
    list: []
  },
  filters: {
    api_fields: {
      department_code: undefined,
      terms_offered: undefined,
      general_education: undefined,
      credit_hours: undefined
    }
  },

}
