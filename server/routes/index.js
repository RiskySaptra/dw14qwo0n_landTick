const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const UserController = require("../controllers/user");
const TicketController = require("../controllers/ticket");

// Auth Login
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/userCheck", auth, UserController.userCheck);

// Tiket
router.post("/addTicket", auth, TicketController.addTicket);
router.get("/indexTicket", TicketController.indexTicket);

// Payment

module.exports = router;
