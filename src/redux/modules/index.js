import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts/reducer'

const reducers = {
  form: formReducer,
  posts
 }

export default combineReducers(reducers)