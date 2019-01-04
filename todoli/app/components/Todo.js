import React from 'react'
import { Text, View } from 'react-native'
import { CheckBox, Icon } from 'react-native-elements'
import { PADDING } from '../constants/dimensions'
import {
  deleteTodo as dbDeleteTodo,
  setTodoChecked
} from '../database'

const ALIGN_PADDING = 3

const Todo = ({ deleteTodo, todo, toggleTodo }) => {
  const handleCheckedPress = (id, checked) => {
    setTodoChecked(id, checked)
      .then(() => {
        if (checked !== todo.checked) {
          toggleTodo(id)
        }
      })
  }

  const handleDeletePress = (id) => {
    dbDeleteTodo(id)
      .then((id) => {
        deleteTodo(id)
      })
  }

  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row',
      padding: PADDING
    }}>
      <View>
        <CheckBox
          checked={todo.checked}
          onPress={() => handleCheckedPress(todo.id, !todo.checked)}
        />
      </View>
      <View style={{
        flex: 1,
        paddingBottom: ALIGN_PADDING
      }}>
        <Text>{todo.title}</Text>
      </View>
      <View style={{
        paddingBottom: ALIGN_PADDING
      }}>
        <Icon
          name='delete-outline'
          onPress={() => handleDeletePress(todo.id)}
          type='material-community'
        />
      </View>
    </View>
  )
}

export default Todo
