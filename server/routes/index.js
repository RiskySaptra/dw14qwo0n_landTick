const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const UserController = require("../controllers/user");
const TicketController = require("../controllers/ticket");
const TransactionController = require("../controllers/transaction");
const StationController = require("../controllers/station");

// Auth Login
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/userCheck", auth, UserController.userCheck);

// Tiket
router.post("/addTicket", auth, TicketController.addTicket);
router.get("/indexTicket", TicketController.indexTicket);

// Transaction
router.post("/addTransaction", auth, TransactionController.addTransaction);
router.get("/userTransaction", auth, TransactionController.userTransaction);
router.get("/indexTransaction", TransactionController.indexTransaction);

// Station
router.get("/indexStation", StationController.indexStation);

module.exports = router;
