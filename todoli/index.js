/** @format */

import React from 'react'
import { AppRegistry } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './app/containers/App'
import rootReducer from './app/reducers'
import { name as appName } from './app.json'

const store = createStore(rootReducer)

AppRegistry.registerComponent(appName, () => {
  return () => {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    )
  }
})
