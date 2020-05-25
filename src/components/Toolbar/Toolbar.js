import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar as ToolbarM,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import Aux from "../../hoc/Auxliary/Auxliary"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#30889f",
  },
}))

const Toolbar = (props) => {
  const classes = useStyles()
  return (
    <Aux>
      <AppBar className={classes.header} position="static">
        <ToolbarM>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              Weather Scanner 0602
            </NavLink>
          </Typography>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Login</Button>
          </NavLink>
        </ToolbarM>
      </AppBar>
    </Aux>
  )
}

export default Toolbar
