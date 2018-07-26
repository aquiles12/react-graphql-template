// import const
import { 
  GET_DEFAULT_LIST_FULFILLED,
  GET_DEFAULT_LIST_PENDING,
  GET_DEFAULT_LIST_REJECTED, 
} 
from "./const";

// Action GO

export const getDefaultList 
= () => (dispatch) => {
  dispatch({
    type: GET_DEFAULT_LIST_PENDING,
  })
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    dispatch({
      type: GET_DEFAULT_LIST_FULFILLED,
      payload: json,
    })
  })
  .catch(err => {
    dispatch({
      type: GET_DEFAULT_LIST_REJECTED,
      payload: {
        errorMsg: 'Failed trying to fetch posts'
      }
    })
  })
}
