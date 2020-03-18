import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { userCheck } from "../_actions/auth";

const PrivateRoute = ({ userCheck, auth, children, ...rest }) => {
  useEffect(() => {
    userCheck();
  }, [userCheck]);
  // console.log(auth.user === null && !auth.authenticated);
  // console.log(auth.user === null);
  // console.log("private", "data", auth, "loading", auth.authenticated);
  if (auth.user === null) {
    return <></>;
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user.user.role === "admin" ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
