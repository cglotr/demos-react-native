import { connect } from 'react-redux'
import { deleteCheckedTodos, deleteTodo, toggleTodo } from '../actions'
import App from '../components/App'

const mapStateToProps = ({ todos }) => {
  return {
    todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCheckedTodos: () => dispatch(deleteCheckedTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
