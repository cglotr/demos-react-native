import moment from 'moment'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          id: moment(),
          done: false,
          title: action.payload.title
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
    case TOGGLE_TODO: {
      if (!action.payload || !action.payload.id) return state

      const id = action.payload.id

      return state.map((todo) => {
        if (todo.id !== id) return todo

        return Object.assign({}, todo, {
          done: !todo.done
        })
      })
    }
    default:
      return state
  }
}

export default todos
