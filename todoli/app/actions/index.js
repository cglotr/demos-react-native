export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const RESET_TODOS = 'RESET_TODOS'
export const TOGGLE_CHECKED_VISIBILITY = 'TOGGLE_CHECKED_VISIBILITY'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (todo) => {
  return {
    payload: {
      todo
    },
    type: ADD_TODO
  }
}

export const deleteTodo = (id) => {
  return {
    payload: {
      id
    },
    type: DELETE_TODO
  }
}

export const resetTodos = (todos) => {
  return {
    payload: {
      todos
    },
    type: RESET_TODOS
  }
}

export const toggleCheckedVisibility = () => {
  return {
    type: TOGGLE_CHECKED_VISIBILITY
  }
}

export const toggleTodo = (id) => {
  return {
    payload: {
      id
    },
    type: TOGGLE_TODO
  }
}
