import React from 'react'
import { Button, View } from 'react-native'
import { GOOGLE_BLUE, GOOGLE_YELLOW } from '../constants/colors'

const Footer = ({ checkedVisibility, toggleCheckedVisibility }) => {
  const title = `${checkedVisibility ? 'Hide' : 'Show'} checked todos`

  return (
    <View>
      <Button
        color={checkedVisibility ? GOOGLE_YELLOW : GOOGLE_BLUE}
        onPress={() => { toggleCheckedVisibility() }}
        title={title}
      />
    </View>
  )
}

export default Footer
