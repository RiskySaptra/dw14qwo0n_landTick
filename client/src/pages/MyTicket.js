import React from "react";
import Header from "../components/Header";
import { Grid, Paper, Button, Chip, Divider, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const MyTicket = () => {
  return (
    <>
      <Grid>
        <Header />
      </Grid>
      <Grid
        style={{
          marginTop: "120px",
          marginLeft: "100px",
          marginRight: "100px"
        }}
      >
        <h1>My Ticket</h1>
        <Grid>
          <Paper>
            <Grid container style={{ padding: "2%" }}>
              <Grid item xs={9} style={{ paddingRight: "2%" }}>
                <Grid container direction="column">
                  <Grid>
                    <h2
                      style={{
                        marginTop: "0"
                      }}
                    >
                      LandTick
                    </h2>
                  </Grid>
                  <Grid container direction="row">
                    <Grid item xs={3}>
                      <h3
                        style={{
                          margin: "0"
                        }}
                      >
                        Argo Willis
                      </h3>
                      <p>Esekutif</p>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                      <h3
                        style={{
                          margin: "0"
                        }}
                      >
                        05:30 <b>WIB</b>
                      </h3>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        21 Februari
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <h3
                        style={{
                          margin: "0"
                        }}
                      >
                        Jakarta(GMR)
                      </h3>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        Stasiun Gambir
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container direction="row">
                    <Grid item xs={3}>
                      <Chip size="small" color="primary" label="Approved" />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                      <h3
                        style={{
                          margin: "0"
                        }}
                      >
                        10:05 <b>WIB</b>
                      </h3>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        21 Februari
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <h3
                        style={{
                          margin: "0"
                        }}
                      >
                        Surabaya(SBY)
                      </h3>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        Stasiun Surabaya
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" style={{ marginTop: "7%" }}>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        ID
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        Buyer Name
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        Phone Number
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        Email
                      </p>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container direction="row">
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        664142682176008
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        082197965530
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        Afdool
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          margin: "0"
                        }}
                      >
                        afdool@gmail.com
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid
                  container
                  direction="column"
                  alignItems="flex-end"
                  justify="space-between"
                  style={{ height: "100%" }}
                >
                  <Box>
                    <h1
                      style={{
                        margin: "0"
                      }}
                    >
                      Kereta Api
                    </h1>
                    <p
                      style={{
                        margin: "0"
                      }}
                    >
                      <b>Saturday</b>, 21 Februari 2020
                    </p>
                  </Box>
                  <NavLink
                    to="/Payment"
                    style={{
                      color: "inherit",
                      textDecoration: "inherit",
                      width: "100%"
                    }}
                  >
                    <Button variant="contained" color="primary" fullWidth>
                      Bayar Sekarang
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default MyTicket;
