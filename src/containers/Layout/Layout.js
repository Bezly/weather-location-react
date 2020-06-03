import React, { Suspense } from "react"

import classStyles from "./Layout.module.css"

import Aux from "../../hoc/Auxliary/Auxliary"
import withClass from "../../hoc/Auxliary/withClass"
import Toolbar from "../../components/Toolbar/Toolbar"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"
import { Route, Switch } from "react-router-dom"

const Login = React.lazy(() => import("../Auth/Login/Login"))
const Registration = React.lazy(() => import("../Auth/Registration/Registration"))

function App() {
  console.log("[Layout]")
  return (
    <Aux>
      <header>
        <Toolbar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <h1>Weather Locator Application is Live!</h1>
            <WeatherBlock />
          </Route>
          <Route path="/login">
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          </Route>
          <Route path="/registration">
            <Suspense fallback={<div>Loading...</div>}>
              <Registration />
            </Suspense>
          </Route>
        </Switch>
      </main>
      <footer>footer</footer>
    </Aux>
  )
}

export default withClass(App, classStyles.Layout)
