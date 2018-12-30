import React, { Component } from 'react'
import { TextInput } from 'react-native'

class Input extends Component {
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
      <TextInput
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmitEditing}
        style={{
        }}
        value={this.state.title}
      />
    )
  }
}

export default Input
