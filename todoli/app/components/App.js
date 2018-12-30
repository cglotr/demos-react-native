import React from 'react'
import { ScrollView, View } from 'react-native'
import Footer from './Footer'
import Title from './Title'
import Todo from './Todo'
import { PADDING } from '../constants/dimensions'
import Input from '../containers/Input'

const App = ({ deleteTodo, todos, toggleTodo }) => {
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
        alignItems: 'center'
      }}>
        <Input />
      </View>
      <ScrollView>
        {todos.map((todo) => {
          return (
            <Todo
              deleteTodo={deleteTodo}
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
            />
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
