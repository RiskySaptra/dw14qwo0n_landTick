const models = require("../models");
const Ticket = models.ticket;
const Station = models.station;

exports.addTicket = async (req, res) => {
  try {
    if (req.role === "admin") {
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
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
exports.indexTicket = async (req, res) => {
  try {
    ticket = await Ticket.findAll({
      include: [
        {
          model: Station,
          as: "departure",
          attributes: ["code", "name", "city"]
        },
        {
          model: Station,
          as: "destination",
          attributes: ["code", "name", "city"]
        }
      ],
      attributes: {
        exclude: ["createdAt", "departure_station", "destination_station"]
      }
    });
    res.json({
      success: true,
      message: "Success",
      data: { ticket }
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
