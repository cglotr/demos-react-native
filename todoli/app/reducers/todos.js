import {
  ADD_TODO,
  DELETE_TODO,
  RESET_TODOS,
  TOGGLE_TODO
} from '../actions'
import { info } from '../utils/logger'

const TAG = 'REDUCER:TODOS'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = action.payload.todo

      const id = todo.id
      const title = todo.title
      const checked = todo.checked

      info(TAG, ADD_TODO, 'id:', id, 'title:', title, 'checked:', checked)

      return [
        {
          id,
          title,
          checked
        },
        ...state
      ]
    }
    case DELETE_TODO: {
      if (!action.payload || !action.payload.id) return state

      const id = action.payload.id

      return state.filter((todo) => {
        return todo.id !== id
      })
    }
    case RESET_TODOS: {
      const todos = action.payload.todos

      return todos.map(todo => todo)
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
