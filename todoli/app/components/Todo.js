import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from 'react-native'
import { CheckBox, Icon } from 'react-native-elements'
import { GOOGLE_RED } from '../constants/colors'
import { PADDING, PADDING_SMALL } from '../constants/dimensions'
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
          containerStyle={{
            paddingLeft: PADDING_SMALL,
            paddingRight: PADDING,
            paddingVertical: PADDING
          }}
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
        paddingBottom: ALIGN_PADDING,
        paddingRight: PADDING
      }}>
        <Icon
          name='delete-outline'
          color={GOOGLE_RED}
          onPress={() => handleDeletePress(todo.id)}
          type='material-community'
        />
      </View>
    </View>
  )
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }),
  toggleTodo: PropTypes.func.isRequired
}

export default Todo
