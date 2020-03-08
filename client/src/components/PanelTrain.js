import React, { useState } from "react";
import {
  Grid,
  TextField,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormControl,
  MenuItem,
  Select,
  Button
} from "@material-ui/core";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import DateFnsUtils from "@date-io/date-fns";
import DateReturn from "./DateReturn";
import DateDeparture from "./DateDeparture";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const PanelTrain = () => {
  const [adult, setAdult] = useState("");
  const [baby, setBaby] = useState("");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
    setShow(!event.target.checked);
  };

  const handleAdult = event => {
    setAdult(event.target.value);
  };
  const handleBaby = event => {
    setBaby(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item xs={5}>
          <Grid>
            <TextField label="From" variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="row" justify="center" alignItems="center">
            <IconButton>
              <SwapHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Destination"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item xs={5}>
          <Grid container direction="row" justify="center" spacing={1}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Round-trip ticket"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Grid container direction="row" justify="center" spacing={1}>
            <Grid item xs={4}>
              <label>Adult</label>
            </Grid>
            <Grid item xs={4}>
              <label>Baby</label>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item xs={5}>
          <Grid container direction="row" justify="center" spacing={1}>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateDeparture />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateReturn data={show} />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Grid container direction="row" justify="center" spacing={1}>
            <Grid item xs={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <Select value={adult} onChange={handleAdult}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <Select value={baby} onChange={handleBaby}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth color="primary" variant="contained">
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default PanelTrain;
