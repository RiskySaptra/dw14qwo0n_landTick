import React, { useEffect } from "react";

import Menus from "./Menu";
import Login from "./Login";
import Register from "./Register";

//redux
import { connect } from "react-redux";
import { userCheck } from "../_actions/auth";

import { Grid, AppBar, makeStyles } from "@material-ui/core";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  padding: {
    padding: "20px 5%"
  },
  paddingAppBar: {
    padding: "5px 50px"
  },
  AppBar: {
    margin: "10px 0px"
  },
  AppBarBtn: {
    margin: "0px 10px",
    minWidth: "100px"
  },
  noPadding: {
    margin: "0px 0px 10px"
  }
}));

const Header = ({ userCheck, auth }) => {
  const classes = useStyles();
  useEffect(() => {
    userCheck();
  }, [userCheck]);

  //console.log("unch", auth.loading);

  return (
    <AppBar color="inherit">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.paddingAppBar}
      >
        <NavLink to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <h1 className={classes.AppBar}>
            <span style={{ color: "orange" }}>Land</span>Tick
          </h1>
        </NavLink>

        {auth.authenticated && !auth.loading ? (
          <Grid
            style={{
              alignItems: "center",
              marginRight: "20px",
              display: "flex"
            }}
          >
            <Menus unch={auth} />
          </Grid>
        ) : (
          <Grid>
            <Register />
            <Login />
          </Grid>
        )}
      </Grid>
    </AppBar>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userCheck: () => dispatch(userCheck())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
