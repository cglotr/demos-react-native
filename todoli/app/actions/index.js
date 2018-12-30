export const ADD_TODO = 'ADD_TODO'

export const addTodo = (title) => {
  return {
    payload: {
      title
    },
    type: ADD_TODO
  }
}
