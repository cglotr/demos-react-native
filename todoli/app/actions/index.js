import { createTodo } from '../database'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_CHECKED_TODOS = 'DELETE_CHECKED_TODOS'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (title) => {
  createTodo(title)
  return {
    payload: {
      title
    },
    type: ADD_TODO
  }
}

export const deleteCheckedTodos = () => {
  return {
    type: DELETE_CHECKED_TODOS
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

export const toggleTodo = (id) => {
  return {
    payload: {
      id
    },
    type: TOGGLE_TODO
  }
}
