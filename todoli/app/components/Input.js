import React, { Component } from 'react'
import { Input } from 'react-native-elements'

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
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
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
