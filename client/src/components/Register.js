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
  MenuItem
} from "@material-ui/core";

// redux
import { connect } from "react-redux";
import { register } from "../_actions/user";

const useStyles = makeStyles(theme => ({
  AppBarBtn: {
    margin: "0px 10px",
    minWidth: "70px"
  }
}));

const Register = ({ register, user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }
  ];
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
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    await register(data);
    window.location.reload();
  };
  console.log(data);

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
        <DialogTitle>Register</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <TextField
              required
              variant="outlined"
              margin="dense"
              name="full_name"
              label="Full Name"
              type="text"
              value={data.full_name}
              onChange={handleChange}
              style={{ minWidth: "300px" }}
            />
            <TextField
              required
              variant="outlined"
              margin="dense"
              name="user_name"
              label="User Name"
              type="text"
              value={data.user_name}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              margin="dense"
              name="email"
              label="Email"
              type="text"
              value={data.email}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              margin="dense"
              name="password"
              label="Password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="gender"
              select
              label="Gender"
              value={data.gender}
              onChange={handleChange}
              variant="outlined"
            >
              {genders.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              variant="outlined"
              margin="dense"
              name="phone"
              label="Phone"
              type="text"
              value={data.phone}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              margin="dense"
              name="address"
              label="Address"
              type="text"
              value={data.address}
              onChange={handleChange}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              value="Submit"
              onClick={handleSubmit}
              fullWidth
              color="primary"
              variant="contained"
            >
              {register.loading ? <>Please Wait...</> : <>Register</>}
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};
const mapStateToProps = state => {
  return {
    register: state.register
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: data => dispatch(register(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
