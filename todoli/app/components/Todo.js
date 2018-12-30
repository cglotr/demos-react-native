import React from 'react'
import { Text, View } from 'react-native'
import { CheckBox, Icon } from 'react-native-elements'

const ALIGN_PADDING = 3

const Todo = ({ deleteTodo, todo, toggleTodo }) => {
  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row',
      padding: 8
    }}>
      <View>
        <CheckBox
          checked={todo.checked}
          onPress={() => toggleTodo(todo.id)}
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
          onPress={() => deleteTodo(todo.id)}
          type='material-community'
        />
      </View>
    </View>
  )
}

export default Todo
