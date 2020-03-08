const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const { login } = require("../controllers/user");
const { register } = require("../controllers/user");
const { userCheck } = require("../controllers/user");
const { userIndex } = require("../controllers/user");

// Auth Login
router.post("/login", login);
router.post("/register", register);
router.get("/userCheck", auth, userCheck);

// router.get("/users", userIndex);

module.exports = router;
