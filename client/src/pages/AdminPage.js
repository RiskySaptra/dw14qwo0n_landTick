import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { listTransaction } from "../_actions/transaction";

import Header from "../components/Header";
import {
  Grid,
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Chip
} from "@material-ui/core";

const AdminPage = ({ listTransaction, transaction }) => {
  useEffect(() => {
    listTransaction();
  }, [listTransaction]);

  if (transaction.data == null) {
    return <>LOADING...</>;
  } else {
    console.log("datanya", transaction.data.transaction);
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
                  {transaction.data.transaction.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row" align="center">
                        {index}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.user.full_name}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.ticket.departure.name} -{" "}
                        {row.ticket.destination.name}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.payment_slip}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <Chip color="primary" label={row.payment_status} />
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <button>Check</button> <button>approve</button>{" "}
                        <button>destroy</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </>
    );
  }
};
const mapStateToProps = state => {
  return {
    transaction: state.transaction
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listTransaction: () => dispatch(listTransaction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
