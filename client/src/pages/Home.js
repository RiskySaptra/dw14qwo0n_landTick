import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { userCheck } from "../_actions/auth";

import TabPanel from "../components/TabPanel";
import PanelTrain from "../components/PanelTrain";
import Header from "../components/Header";

import { Grid, makeStyles, Paper, Tabs, Tab } from "@material-ui/core";

import Carousel from "nuka-carousel";

const useStyles = makeStyles(theme => ({
  padding: {
    padding: "20px 5%"
  },
  paddingAppBar: {
    padding: "5px 50px"
  },
  AppBar: {
    margin: "10px 0px"
  },
  AppBarBtn: {
    margin: "0px 10px",
    minWidth: "100px"
  },
  noPadding: {
    margin: "0px 0px 10px"
  }
}));
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const Home = ({ userCheck }) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  useEffect(() => {
    userCheck();
  }, [userCheck]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log("unch", auth.loading);

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="stretch"
        style={{
          background: "url(/unch.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 500px"
        }}
      >
        <Grid item xs={12}>
          <Grid>
            <Header />
          </Grid>
          <Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ marginTop: "120px" }}
              className={classes.padding}
            >
              <Grid item xs={6}>
                <h2
                  style={{
                    color: "white",
                    textShadow: "2px 2px 5px black"
                  }}
                >
                  <span style={{ color: "orange" }}>Good Morning</span> Ticket
                  Seeker !
                </h2>
                <p
                  style={{
                    color: "white",
                    textShadow: "2px 2px 5px black"
                  }}
                >
                  Ingin Pulkam dengan Good Deal?
                </p>
                <p
                  style={{
                    color: "white",
                    textShadow: "2px 2px 5px black"
                  }}
                >
                  Masuk atau Daftar Sekarang ! !
                </p>
              </Grid>
              <Grid item xs={6}>
                <Carousel transitionMode="scroll3d">
                  <Paper
                    style={{
                      height: "200px",
                      backgroundImage: "url(/traiin.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                    elevation={3}
                  />
                  <Paper
                    style={{
                      height: "200px",
                      backgroundImage: "url(/traiin.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                    elevation={3}
                  />
                  <Paper
                    style={{
                      height: "200px",
                      backgroundImage: "url(/traiin.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                    elevation={3}
                  />
                </Carousel>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.padding}>
            <Paper elevation={3}>
              <Grid container direction="row" alignItems="stretch">
                <Grid item xs={2}>
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                  >
                    <Tab label="Train" {...a11yProps(0)} />
                    <Tab label="Airplane" {...a11yProps(1)} />
                  </Tabs>
                </Grid>
                <Grid item xs={10}>
                  <Grid
                    container
                    direction="column"
                    style={{ padding: "2% 3%" }}
                  >
                    <Grid>
                      <h3 className={classes.noPadding}>Train</h3>
                    </Grid>
                    <TabPanel value={value} index={0}>
                      <PanelTrain />
                    </TabPanel>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userCheck: () => dispatch(userCheck())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
