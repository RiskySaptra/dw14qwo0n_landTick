import React, { useEffect, useState } from "react";

//redux
import { connect } from "react-redux";
import { listTicket } from "../_actions/ticket";

import {
  Grid,
  makeStyles,
  Button,
  Dialog,
  DialogContent
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "white",
    borderRadius: 3,
    margin: "5px 0px",
    color: "black"
  },
  label: {
    textTransform: "capitalize"
  }
});

const LandingTicket = ({ listTicket, ticket }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpenss = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    listTicket();
  }, [listTicket]);
  // console.log("darimana boss", ticket.data);
  // console.log("status", props.ticket.loading);
  if (ticket.loading) {
    return <>loading</>;
  } else {
    return (
      <>
        <Grid>
          {ticket.data.ticket.map((item, index) => (
            <Button
              fullWidth
              variant="outlined"
              onClick={handleOpenss}
              classes={{
                label: classes.label,
                root: classes.root
              }}
              style={{ padding: "0px 0px" }}
              key={index}
            >
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                wrap="nowrap"
              >
                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>
                      <b>{item.train}</b>
                    </p>
                    <p>{item.class}</p>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>
                      {item.departure_time} <b> WIB</b>
                    </p>
                    <p>{item.departure_station}</p>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>
                      {item.arrival_time} <b> WIB</b>
                    </p>
                    <p>{item.destination_station}</p>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>
                      2 <b>Hours</b> 12 <b>Minutes</b>
                    </p>
                  </Grid>
                </Grid>

                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>
                      <b>Rp. </b>
                      {item.ticket_price}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Button>
          ))}
          <Dialog open={open} onClose={handleClose} maxWidth="xl">
            <DialogContent>
              <p>Login Dulu..</p>
            </DialogContent>
          </Dialog>
        </Grid>
      </>
    );
  }
};
const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listTicket: () => dispatch(listTicket())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingTicket);
