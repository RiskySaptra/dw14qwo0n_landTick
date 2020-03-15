import React, { useState } from "react";
import {
  Grid,
  TextField,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { stations } from "../select_data/stasiun";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const PanelTrain = () => {
  const [check, setCheck] = useState(false);
  const [adult, setAdult] = useState("");
  const [baby, setBaby] = useState("");
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");

  const handleSwap = e => {
    setFrom(destination);
    setDestination(from);
  };

  const handleSelectDeparture = (e, value) => {
    setFrom(value);
  };

  const handleSelectDestination = (e, value) => {
    setDestination(value);
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
            <Autocomplete
              options={stations}
              inputValue={from}
              getOptionLabel={option => option.location}
              onInputChange={handleSelectDeparture}
              renderInput={params => (
                <TextField
                  {...params}
                  label="From"
                  margin="dense"
                  variant="outlined"
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="row" justify="center" alignItems="center">
            <IconButton onClick={handleSwap}>
              <SwapHorizIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Autocomplete
            options={stations}
            inputValue={destination}
            getOptionLabel={option => option.location}
            onInputChange={handleSelectDestination}
            renderInput={params => (
              <TextField
                {...params}
                label="Destination"
                margin="dense"
                variant="outlined"
              />
            )}
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
                  <Checkbox onChange={e => setCheck(!check)} color="primary" />
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
              <TextField
                fullWidth
                name="departure_date"
                variant="outlined"
                margin="dense"
                format="dd/mm/yyyy"
                defaultValue="2020-02-20"
                label="Departure Date"
                type="date"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="departure_date"
                variant="outlined"
                margin="dense"
                format="dd/mm/yyyy"
                defaultValue="2020-02-20"
                label="Return Date"
                type="date"
              />
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
