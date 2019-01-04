import { combineReducers } from 'redux'
import todos from './todos'
import checkedVisibility from './checkedVisibility'

export default combineReducers({
  checkedVisibility,
  todos
})
