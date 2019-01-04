import React from 'react'
import { Text, View } from 'react-native'
import { PADDING } from '../constants/dimensions'
import { FONT_SIZE_XX_LARGE } from '../constants/fonts'

const Title = () => {
  return (
    <View style={{
      paddingBottom: PADDING,
      paddingTop: PADDING
    }}>
      <Text style={{ fontSize: FONT_SIZE_XX_LARGE }}>Todoli</Text>
    </View>
  )
}

export default Title
