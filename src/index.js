import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose, combineReducers  } from "redux"
import reducerWeatherBlock from "./store/reducers/weatherBlock"
import { Provider } from "react-redux"

import "./index.css"

import Layout from "./containers/Layout/Layout"

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

//reducers collection
const rootReducer = combineReducers({
  weatherBlock: reducerWeatherBlock
})

const rootStore = createStore(rootReducer,composeEnhancers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
