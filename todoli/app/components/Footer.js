import React from 'react'
import { Button, View } from 'react-native'
import { GOOGLE_RED } from '../constants/colors'

const Footer = ({ deleteCheckedTodos }) => {
  return (
    <View>
      <Button
        color={GOOGLE_RED}
        onPress={() => { deleteCheckedTodos() }}
        title='Remove completed todos'
      />
    </View>
  )
}

export default Footer
