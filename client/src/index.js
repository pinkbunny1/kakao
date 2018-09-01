// import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'
import reducers from './reducers'
import './styles/style.css';

// Initialising data
// Redux : holds all data(state) inside the app

const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
  // Provider : Componenet that can read changes happened in store and inform the change in its child component <App/>.
  // Child component <App/> as a result, re-renders
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
