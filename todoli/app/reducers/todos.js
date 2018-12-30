import moment from 'moment'
import {
  ADD_TODO,
  DELETE_CHECKED_TODOS,
  DELETE_TODO,
  TOGGLE_TODO
} from '../actions'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          checked: false,
          id: moment(),
          title: action.payload.title
        },
        ...state
      ]
    }
    case DELETE_CHECKED_TODOS: {
      return state.filter((todo) => {
        return !todo.checked
      })
    }
    case DELETE_TODO: {
      if (!action.payload || !action.payload.id) return state

      const id = action.payload.id

      return state.filter((todo) => {
        return todo.id !== id
      })
    }
    case TOGGLE_TODO: {
      if (!action.payload || !action.payload.id) return state

      const id = action.payload.id

      return state.map((todo) => {
        if (todo.id !== id) return todo

        return Object.assign({}, todo, {
          checked: !todo.checked
        })
      })
    }
    default:
      return state
  }
}

export default todos
