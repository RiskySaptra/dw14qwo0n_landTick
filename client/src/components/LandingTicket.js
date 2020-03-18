import React, { useEffect, useState } from "react";

//redux
import { connect } from "react-redux";
import { listTicket } from "../_actions/ticket";

import { NavLink } from "react-router-dom";
import { Grid, makeStyles, Dialog, Box, Button } from "@material-ui/core";

import moment from "moment";
import { toRupiah } from "../helpers/helper";
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
  const [order, setOrder] = useState(null);
  const classes = useStyles();

  const getDuration = (timeA, timeB) => {
    var startTime = moment(timeA, "YYYY-MM-DD HH:mm:ss");
    var endTime = moment(timeB, "YYYY-MM-DD HH:mm:ss");
    var duration = moment.duration(endTime.diff(startTime));
    var hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes()) - hours * 60;
    if (hours > 0) {
      if (minutes === 0) {
        return `${hours} Hour`;
      } else {
        return `${hours} Hour ${minutes} Minutes`;
      }
    } else {
      return `${minutes} Minutes`;
    }
  };

  const handleData = async (e, value) => {
    await setOrder(value.id);
    setOpen(!open);
  };
  console.log(order);

  useEffect(() => {
    listTicket();
  }, [listTicket]);

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
              onClick={e => {
                handleData(e, item);
              }}
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
                      {moment(item.departure_time)
                        .local()
                        .format("HH:mm")}{" "}
                      WIB
                    </p>
                    <p>{item.departure.city}</p>
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
                      {moment(item.arrival_time)
                        .local()
                        .format("HH:mm")}{" "}
                      WIB
                    </p>
                    <p>{item.destination.city}</p>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>{getDuration(item.departure_time, item.arrival_time)}</p>
                  </Grid>
                </Grid>

                <Grid item xs={2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <p>{toRupiah(item.ticket_price)}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Button>
          ))}
          <Dialog
            open={open}
            onClose={e => {
              setOpen(false);
            }}
            maxWidth="xl"
          >
            <Grid container>
              <Box style={{ margin: "15px" }}>
                <p>
                  Your ticket has been added successfully, please immediately
                  make a payment,
                  <NavLink to="/MyTicket">Click Here</NavLink>
                </p>
              </Box>
            </Grid>
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
