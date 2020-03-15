import React, { useState } from "react";

import { classKereta } from "../select_data/classKereta";
import { stations } from "../select_data/stasiun";

import Header from "../components/Header";
import { Grid, TextField, Button, Box } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Alert from "@material-ui/lab/Alert";

//redux
import { connect } from "react-redux";
import { addTicket } from "../_actions/ticket";

const AdminAddTicket = ({ addTicket, ticket, res }) => {
  const [data, setData] = useState({
    train: "",
    class: "",
    departure_date: "",
    departure_station: "",
    departure_time: "",
    destination_station: "",
    arrival_time: "",
    ticket_price: 0,
    quantities: 0
  });
  console.log("unch", ticket.message);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    await addTicket(data);
    window.location.reload();
  };

  const handleSelectClass = (e, value) => {
    setData({ ...data, class: value });
  };
  const handleSelectDeparture = (e, value) => {
    setData({ ...data, departure_station: value });
  };
  const handleSelectDestination = (e, value) => {
    setData({ ...data, destination_station: value });
  };

  return (
    <>
      <Grid container direction="column">
        <Grid>
          <Header />
        </Grid>
        <Grid style={{ padding: "120px 20%" }}>
          <Grid container direction="column">
            <TextField
              name="train"
              variant="outlined"
              margin="dense"
              label="Train"
              type="text"
              onChange={handleChange}
            />
            <Autocomplete
              options={classKereta}
              getOptionLabel={option => option.label}
              onInputChange={handleSelectClass}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Class"
                  margin="dense"
                  variant="outlined"
                />
              )}
            />
            <TextField
              name="departure_date"
              variant="outlined"
              margin="dense"
              format="dd/mm/yyyy"
              defaultValue="2020-02-20"
              label="Departure Date"
              type="date"
              onChange={handleChange}
            />
            <Autocomplete
              options={stations}
              getOptionLabel={option => option.location}
              onInputChange={handleSelectDeparture}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Departure Station"
                  margin="dense"
                  variant="outlined"
                />
              )}
            />
            <TextField
              name="departure_time"
              variant="outlined"
              margin="dense"
              defaultValue="00:00"
              label="Departure Time"
              type="time"
              onChange={handleChange}
            />
            <Autocomplete
              options={stations}
              getOptionLabel={option => option.location}
              onInputChange={handleSelectDestination}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Destination Station"
                  margin="dense"
                  variant="outlined"
                />
              )}
            />
            <TextField
              name="arrival_time"
              variant="outlined"
              margin="dense"
              defaultValue="00:00"
              label="Arrival Time"
              type="time"
              format="24h"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="dense"
              name="ticket_price"
              label="Ticket Price"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="dense"
              name="quantities"
              label="Quantities"
              onChange={handleChange}
            />
            <Button
              style={{ marginTop: "2%" }}
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              save
            </Button>
            {ticket.message ? (
              <Box style={{ paddingTop: "5%" }}>
                <Alert severity="success" action={false}>
                  {ticket.message}
                </Alert>
              </Box>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTicket: data => dispatch(addTicket(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddTicket);
