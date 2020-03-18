const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const User = models.user;
const Transaction = models.transaction;
const Ticket = models.ticket;

exports.login = async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const user = await User.findOne({ where: { user_name } });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.json({
          success: true,
          message: "Login success",
          data: { user, token }
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Invalid password. please try again",
          data: {}
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "Invalid username. please try again",
        data: {}
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
exports.register = async (req, res) => {
  try {
    const hash = await bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    user = await User.create(req.body);
    res.json({
      success: true,
      message: "Register success",
      data: { user }
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};

exports.userCheck = async (req, res) => {
  try {
    if (req.user != null) {
      const user = await User.findOne({
        where: { id: req.user }
      });
      res.status(200).json({
        success: true,
        message: "Load success",
        data: { user }
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No token found",
        data: {}
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
