import React from "react";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import AdminAddTicket from "./pages/AdminAddTicket";
import PrivateRoute from "./components/PrivateRoute";

import MyTicket from "./pages/MyTicket";
import Payment from "./pages/Payment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute path="/addTicket">
            <AdminAddTicket />
          </PrivateRoute>
          <Route path="/myTicket">
            <MyTicket />
          </Route>
          <Route path="/Payment">
            <Payment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
