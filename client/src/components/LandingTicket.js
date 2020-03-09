import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { listTicket } from "../_actions/ticket";

import { Grid, makeStyles, Button } from "@material-ui/core";

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
  const classes = useStyles();
  useEffect(() => {
    listTicket();
  }, [listTicket]);
  // console.log("darimana", ticket.data);
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
                      2 <b>Jam</b> 12 <b>Menit</b>
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
