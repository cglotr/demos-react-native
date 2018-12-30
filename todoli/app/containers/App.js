import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = ({ todos }) => {
  return {
    todos
  }
}

export default connect(mapStateToProps)(App)
