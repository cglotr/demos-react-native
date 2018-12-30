import { ADD_TODO } from '../actions'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          done: false,
          title: action.payload.title
        },
        ...state
      ]
    }
    default:
      return state
  }
}

export default todos
