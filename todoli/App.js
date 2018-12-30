import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'
import { createStore } from 'redux'
import App from './app/containers/App'
import rootReducer from './app/reducers'

const store = createStore(rootReducer)

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  )
}
