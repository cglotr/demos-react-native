import {
  ADD_TODO,
  DELETE_TODO,
  RESET_TODOS,
  TOGGLE_TODO
} from '../actions'
import { warn } from '../utils/logger'

const TAG = 'REDUCER:TODOS'

const init = []

const constructTodo = (id, title, checked) => {
  if (!id || !title || (checked !== true && checked !== false)) {
    return null
  }

  return {
    id,
    title,
    checked
  }
}

const todos = (state = init, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = action.payload.todo

      if (!todo) {
        warn(TAG, 'Missing todo in payload!')
        return state
      }

      const checked = todo.checked
      const id = todo.id
      const title = todo.title

      const obj = constructTodo(id, title, checked)

      if (!obj) {
        warn(TAG, 'Failed to construct todo!')
        return state
      }

      return [ obj, ...state ]
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
