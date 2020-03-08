import React, { useState } from "react";
import {
  Dialog,
  Button,
  makeStyles,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Divider,
  Grid,
  Box
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

// redux
import { connect } from "react-redux";
import { login } from "../_actions/auth";

const useStyles = makeStyles(theme => ({
  AppBarBtn: {
    margin: "0px 10px",
    minWidth: "70px"
  }
}));

const Login = ({ login, auth }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    user_name: "",
    password: ""
  });
  // console.log("login", auth.loading);

  const handleChange = e => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleLogin = () => {
    login(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        className={classes.AppBarBtn}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container direction="column" justify="flex-start">
            <TextField
              variant="outlined"
              margin="dense"
              id="user_name"
              label="Username"
              type="text"
              value={data.user_name}
              onChange={handleChange}
              style={{ minWidth: "300px" }}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="password"
              label="Password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
          </Grid>

          {auth.error ? (
            <Box style={{ paddingTop: "5%" }}>
              <Alert severity="error" action={false}>
                {auth.error}
              </Alert>
            </Box>
          ) : (
            <></>
          )}
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Button
              value="Submit"
              onClick={handleLogin}
              fullWidth
              color="primary"
              variant="contained"
            >
              {auth.loading ? <>Login...</> : <>Login</>}
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
