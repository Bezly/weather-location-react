import React from "react"

import classStyles from "./Toolbar.module.css"

import Aux from "../../hoc/Auxliary/Auxliary"
import withClass from "../../hoc/Auxliary/withClass"

const Toolbar = (props) => {
  return (
    <Aux>
      <div>Logo</div>
      <nav className={classStyles.Nav}>
        <li>
          <a href="">First</a>
        </li>
        <li>
          <a href="">Second</a>
        </li>
        <li>
          <a href="">Third</a>
        </li>
      </nav>
    </Aux>
  )
}

export default withClass(Toolbar, classStyles.Toolbar)
