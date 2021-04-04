import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import reducerWeatherBlock from "./store/reducers/weatherBlock"
import reducerLogin from './store/reducers/login'
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import "./index.css"

import Layout from "./containers/Layout/Layout"

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

//reducers collection
const rootReducer = combineReducers({
  weatherBlock: reducerWeatherBlock,
  login: reducerLogin,
})

const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={rootStore}>
        <Layout />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
