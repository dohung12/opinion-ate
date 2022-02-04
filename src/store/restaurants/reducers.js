import { combineReducers } from 'redux'
import { STORE_RESTAURANTS } from './action'

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records

    default:
      return state
  }
}

export default combineReducers({
  records,
})
