import React from 'react'
import { ScrollView, View } from 'react-native'
import Footer from './Footer'
import Title from './Title'
import Todo from './Todo'
import { PADDING } from '../constants/dimensions'
import Input from '../containers/Input'

const App = ({ deleteCheckedTodos, deleteTodo, todos, toggleTodo }) => {
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
      <View style={{
        flex: 1,
        paddingBottom: PADDING,
        paddingTop: PADDING
      }}>
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
      </View>
      <View style={{
        alignItems: 'center',
        paddingBottom: PADDING * 2
      }}>
        <Footer deleteCheckedTodos={deleteCheckedTodos} />
      </View>
    </View>
  )
}

export default App