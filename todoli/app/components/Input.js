import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Input as EInput } from 'react-native-elements'
import { createTodo } from '../database'

class Input extends Component {
  state = {
    title: ''
  }

  handleChangeText = (title) => {
    this.setState({ title })
  }

  handleSubmitEditing = () => {
    const { addTodo } = this.props
    const { title } = this.state

    createTodo(title)
      .then((todo) => {
        addTodo(todo)
        this.setState({ title: '' })
      })
  }

  render () {
    return (
      <EInput
        inputStyle={{
          marginLeft: 0
        }}
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmitEditing}
        placeholder='Add a todo!'
        value={this.state.title}
      />
    )
  }
}

Input.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Input
