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
  Grid
} from "@material-ui/core";

// redux
import { connect } from "react-redux";
import { register } from "../_actions/auth";

const useStyles = makeStyles(theme => ({
  AppBarBtn: {
    margin: "0px 10px",
    minWidth: "70px"
  }
}));

const Register = ({ register }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    role: "user",
    full_name: "",
    user_name: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: ""
  });
  const handleChange = e => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleLogin = () => {
    register(data);
  };
  // console.log(data);

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
        Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <TextField
              margin="dense"
              id="full_name"
              label="Full Name"
              type="text"
              value={data.full_name}
              onChange={handleChange}
              style={{ minWidth: "300px" }}
            />
            <TextField
              margin="dense"
              id="user_name"
              label="User Name"
              type="text"
              value={data.user_name}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="text"
              value={data.email}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              id="gender"
              label="Gender"
              type="text"
              value={data.gender}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              value={data.address}
              onChange={handleChange}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button fullWidth value="Submit" onClick={handleLogin}>
              Register
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};
const mapStateToProps = state => {
  return {
    register: state.register,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: data => dispatch(register(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
