import { Types } from './actions'
import { initialState } from '../../redux/initialState'

const filters = (state = initialState, action) => {
  switch(action.type) {
    case Types.UPDATE_FILTER:
      if (action.api_field) {
        return Object.assign({}, state, {
          filters: {
            api_fields: {
              [action.filter]: action.value
            }
          }
        })
      } else {
        return Object.assign({}, state, {
          filters: {
            [action.filter]: action.value
          }
        })
      }
    default:
      return state
  }
}

export default filters
