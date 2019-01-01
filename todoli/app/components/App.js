import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import SQLite from 'react-native-sqlite-storage'
import Footer from './Footer'
import Title from './Title'
import Todo from './Todo'
import { DATABASE } from '../../config'
import { PADDING } from '../constants/dimensions'
import Input from '../containers/Input'

let database

export default class extends Component {
  componentDidMount () {
    SQLite.DEBUG(true)
    SQLite.enablePromise(true)

    SQLite.openDatabase({ name: DATABASE.FILE_NAME, location: 'default' })
      .then((db) => {
        database = db
      })
  }

  render () {
    const { deleteCheckedTodos, deleteTodo, todos, toggleTodo } = this.props

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
}
