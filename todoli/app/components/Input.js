import React, { Component } from 'react'
import { Input } from 'react-native-elements'
import { createTodo } from '../database'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChangeText = (title) => {
    this.setState({ title })
  }

  handleSubmitEditing = () => {
    createTodo(this.state.title)
      .then((todo) => {
        this.props.addTodo(todo)
        this.setState({ title: '' })
      })
  }

  render () {
    return (
      <Input
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
