import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from '../src/store/store'
import { Provider } from 'react-redux'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
</Provider>
)
