// Initial State
import initialState from './initialState'

import { GET_DEFAULT_LIST_FULFILLED, GET_DEFAULT_LIST_PENDING, GET_DEFAULT_LIST_REJECTED } from './const'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEFAULT_LIST_PENDING: {
      return {
        ...state,
        isFetching: true
      }
    }
    case GET_DEFAULT_LIST_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        defaultList: action.payload
      }
    }
    case GET_DEFAULT_LIST_REJECTED: {
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload.errorMsg
      }
    }
    default:
      return state
  }
}

