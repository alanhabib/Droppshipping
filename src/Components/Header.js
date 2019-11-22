import { NavLink } from "react-router-dom";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: 16
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h3"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Expensify
          </Typography>
          <nav>
            <NavLink
              className={classes.link}
              color="textPrimary"
              exact
              to={"/"}
              activeClassName={"is-active"}
            >
              Home
            </NavLink>
            <NavLink
              variant="button"
              className={classes.link}
              color="textPrimary"
              to={"/details"}
              activeClassName={"is-active"}
            >
              Details
            </NavLink>
            <NavLink
              variant="button"
              className={classes.link}
              color="textPrimary"
              to={"/cart"}
              activeClassName={"is-active"}
            >
              Cart
            </NavLink>
            <NavLink
              variant="button"
              className={classes.link}
              color="textPrimary"
              to={"/help"}
              activeClassName={"is-active"}
            >
              Support
            </NavLink>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
