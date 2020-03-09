const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.ticket;

exports.addTicket = async (req, res) => {
  try {
    if (req.role == "admin") {
      ticket = await Ticket.create(req.body);
      res.json({
        success: true,
        message: "Ticket added",
        data: { ticket }
      });
    } else {
      res.status(404).json({
        success: false,
        message: "You are not an admin",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.indexTicket = async (req, res) => {
  try {
    ticket = await Ticket.findAll({});
    res.json({
      success: true,
      message: "Success",
      data: { ticket }
    });
  } catch (error) {}
};
