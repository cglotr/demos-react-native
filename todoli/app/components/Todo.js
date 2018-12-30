import React from 'react'
import { Switch, Text, View } from 'react-native'

const Todo = ({ done, title }) => {
  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row',
      padding: 8
    }}>
      <Switch value={done} />
      <Text>{title}</Text>
    </View>
  )
}

export default Todo
