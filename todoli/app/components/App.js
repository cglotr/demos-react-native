import React from 'react'
import { ScrollView, View } from 'react-native'
import Footer from './Footer'
import Title from './Title'
import Todo from './Todo'
import { WHITE_SMOKE } from '../constants/colors'
import { PADDING } from '../constants/dimensions'
import Input from '../containers/Input'

const App = ({ todos }) => {
  return (
    <View style={{
      alignItems: 'stretch',
      flex: 1
    }}>
      <View style={{
        alignItems: 'center'
      }}>
        <Title />
      </View>
      <View style={{
        backgroundColor: WHITE_SMOKE,
        paddingLeft: PADDING,
        paddingRight: PADDING
      }}>
        <Input />
      </View>
      <ScrollView>
        {todos.map((todo) => {
          return (
            <Todo done={todo.done} title={todo.title} />
          )
        })}
      </ScrollView>
      <View style={{
        alignItems: 'center'
      }}>
        <Footer />
      </View>
    </View>
  )
}

export default App
