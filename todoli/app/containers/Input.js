import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title) => dispatch(addTodo(title))
  }
}

export default connect(null, mapDispatchToProps)(Input)
