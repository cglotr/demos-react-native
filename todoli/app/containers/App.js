import { connect } from 'react-redux'
import {
  toggleCheckedVisibility,
  deleteCheckedTodos,
  deleteTodo,
  resetTodos,
  toggleTodo
} from '../actions'
import App from '../components/App'

const mapStateToProps = ({ checkedVisibility, todos }) => {
  return {
    checkedVisibility,
    todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCheckedTodos: () => dispatch(deleteCheckedTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    resetTodos: (todos) => dispatch(resetTodos(todos)),
    toggleCheckedVisibility: () => dispatch(toggleCheckedVisibility()),
    toggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
