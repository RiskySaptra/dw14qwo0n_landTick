import React from "react";
import Header from "../components/Header";
import { Grid, Paper, Box, Divider, Button } from "@material-ui/core";

import WarningIcon from "@material-ui/icons/Warning";

const Payment = () => {
  return (
    <>
      <Grid>
        <Grid>
          <Header />
        </Grid>
        <Grid
          style={{
            margin: "120px 100px"
          }}
        >
          <h1>Invoice</h1>
          <Grid container direction="row">
            <Grid item xs={8}>
              <Grid style={{ marginBottom: "2%" }}>
                <Paper variant="outlined" style={{ background: "WhiteSmoke" }}>
                  <Grid container direction="row">
                    <Grid item xs={2}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ height: "100%" }}
                      >
                        <WarningIcon fontSize="large" />
                      </Grid>
                    </Grid>
                    <Grid item xs={10}>
                      <Grid style={{ padding: "10px" }}>
                        <p>
                          Silahkan Mengunakan pembayaran mengunakan melalui
                          M-Banking,E-Banking dan ATM Ke No.Rek yang Tersedia
                        </p>
                        <p>
                          No.Rek: <b>09812312312</b>
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid>
                <Paper variant="outlined">
                  <Grid
                    container
                    style={{ padding: "0px 30px", paddingTop: "60px" }}
                  >
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
                  <Grid
                    container
                    style={{ padding: "0px 30px", paddingBottom: "20px" }}
                  >
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
                        Afdool
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
                        afdool@gmail.com
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid>
                <h1>Rincian Harga</h1>
              </Grid>
              <Grid>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  style={{ height: "100%" }}
                >
                  <Grid item xs={7}>
                    <Grid
                      container
                      direction="column"
                      alignContent="space-between"
                      justify="space-between"
                      style={{ height: "100%" }}
                    >
                      <Paper variant="outlined">
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          style={{
                            padding: "0px 40px"
                          }}
                        >
                          <p>Argo Willis (Dewasa) x1 </p>
                          <p>Rp. 250.000</p>
                          <p>Argo Willis (Dewasa) x1 </p>
                          <p>Rp. 250.000</p>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          style={{
                            background: "WhiteSmoke",
                            padding: "0px 40px"
                          }}
                        >
                          <p>Total</p>
                          <p>
                            <b>Rp. 500.000</b>
                          </p>
                        </Grid>
                      </Paper>

                      <Button variant="contained" color="primary" fullWidth>
                        Bayar Sekarang
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Paper
                      style={{
                        background: "grey",
                        backgroundImage: "url(/default-thumbnail.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        minHeight: "200px",
                        marginLeft: "7%"
                      }}
                    ></Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} style={{ paddingLeft: "2%" }}>
              <Grid container direction="column">
                <Box style={{ background: "lightGrey", padding: "20px" }}>
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
                <Box style={{ background: "WhiteSmoke", padding: "20px" }}>
                  <h2
                    style={{
                      margin: "0"
                    }}
                  >
                    Argo Willis
                  </h2>
                  <p
                    style={{
                      margin: "0"
                    }}
                  >
                    Esekutif (H)
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Payment;
