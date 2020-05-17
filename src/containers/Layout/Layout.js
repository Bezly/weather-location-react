import React from "react"

import classStyles from './Layout.module.css'

import Aux from "../../hoc/Auxliary/Auxliary"
import withClass from '../../hoc/Auxliary/withClass'
import Toolbar from "../../components/Toolbar/Toolbar"
import WeatherBlock from "../../components/WeatherBlock/WeatherBlock"

function App() {
  
  console.log('[Layout]')
  return (
    <Aux>
      <header>
        <Toolbar/>
      </header>
      <main>
        <h1>Weather Locator Application is Live!</h1>
        <WeatherBlock />
      </main>
      <footer>footer</footer>
    </Aux>
  )
}

export default withClass(App, classStyles.Layout)
