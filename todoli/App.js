import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Footer from './components/Footer'
import Title from './components/Title'

class App extends Component {
  render () {
    return (
      <View style={{
        alignItems: 'center',
        flex: 1
      }}>
        <Title />
        <ScrollView></ScrollView>
        <Footer />
      </View>
    )
  }
}

export default App
