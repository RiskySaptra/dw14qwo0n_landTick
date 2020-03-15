import React from "react";

import Header from "../components/Header";
import {
  Grid,
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

const AdminPage = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid>
          <Header />
        </Grid>
        <Grid style={{ padding: "100px" }}>
          <h1>Transaction List</h1>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Users</TableCell>
                  <TableCell align="center">Ticket</TableCell>
                  <TableCell align="center">Payment Slip</TableCell>
                  <TableCell align="center">Payment Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    1
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    full_name
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    ticket_id
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    Payment Slip
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    Payment status (enum)
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <button>Check</button> <button>approve</button>{" "}
                    <button>destroy</button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
export default AdminPage;
