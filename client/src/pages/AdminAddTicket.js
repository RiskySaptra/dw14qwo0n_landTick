import React, { useState, useEffect } from "react";

import { classKereta } from "../select_data/classKereta";
// import { stations } from "../select_data/stasiun";

import Header from "../components/Header";
import { Grid, TextField, Button, Box } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Alert from "@material-ui/lab/Alert";

// time
import DateFnsUtils from "@date-io/date-fns";
import {
  TimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

//redux
import { connect } from "react-redux";
import { addTicket } from "../_actions/ticket";
import { listStation } from "../_actions/station";

const AdminAddTicket = ({ addTicket, ticket, listStation, station }) => {
  useEffect(() => {
    listStation();
  }, [listStation]);
  const [data, setData] = useState({
    train: "",
    class: "",
    departure_date: null,
    departure_station: "",
    departure_time: null,
    destination_station: "",
    arrival_time: null,
    ticket_price: 0,
    quantities: 0
  });
  // console.log("beli apa", data);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    await addTicket(data);
    window.location.reload();
  };

  const handleSelectClass = (e, v) => {
    setData({ ...data, class: v.value });
  };
  const handleSelectDeparture = (e, v) => {
    setData({ ...data, departure_station: v.id });
  };
  const handleSelectDestination = (e, v) => {
    setData({ ...data, destination_station: v.id });
  };
  if (station.loading) {
    return <>LOADING...</>;
  } else {
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
                onChange={(e, value) => handleSelectClass(e, value)}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Class"
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  label="Departure Date"
                  inputVariant="outlined"
                  margin="dense"
                  value={data.departure_date}
                  onChange={e => setData({ ...data, departure_date: e })}
                  format="yyyy/MM/dd"
                />
              </MuiPickersUtilsProvider>

              <Autocomplete
                options={station.data.station}
                getOptionLabel={option => option.name}
                onChange={(e, value) => handleSelectDeparture(e, value)}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Departure Station"
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  autoOk
                  label="Departure Time"
                  inputVariant="outlined"
                  margin="dense"
                  value={data.departure_time}
                  onChange={e => setData({ ...data, departure_time: e })}
                />
              </MuiPickersUtilsProvider>
              <Autocomplete
                options={station.data.station}
                getOptionLabel={option => option.name}
                onChange={(e, value) => handleSelectDestination(e, value)}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Destination Station"
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  autoOk
                  label="Arrival Time"
                  inputVariant="outlined"
                  margin="dense"
                  value={data.arrival_time}
                  onChange={e => setData({ ...data, arrival_time: e })}
                />
              </MuiPickersUtilsProvider>
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
              {ticket.message ? (
                <Box style={{ paddingTop: "5%" }}>
                  <Alert severity="success" action={false}>
                    {ticket.message}
                  </Alert>
                </Box>
              ) : (
                <></>
              )}
              <Button
                style={{ marginTop: "2%" }}
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
};
const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    station: state.station
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTicket: data => dispatch(addTicket(data)),
    listStation: data => dispatch(listStation())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddTicket);
