import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import App from './app/containers/App'
import rootReducer from './app/reducers'

const store = createStore(rootReducer)

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
