import React from 'react'
import { Text, View } from 'react-native'
import { PADDING } from '../constants/dimensions'

const Title = () => {
  return (
    <View style={{
      paddingBottom: PADDING,
      paddingTop: PADDING
    }}>
      <Text style={{ fontSize: 24 }}>Todoli</Text>
    </View>
  )
}

export default Title
