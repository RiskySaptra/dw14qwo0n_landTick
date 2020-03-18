const models = require("../models");
const Transaction = models.transaction;
const User = models.user;
const Ticket = models.ticket;
const Station = models.station;

exports.addTransaction = async (req, res) => {
  try {
    transaction = await Transaction.create({
      user_id: req.user,
      ticket_id: req.body.ticket_id,
      payment_slip: req.body.payment_slip,
      payment_status: req.body.payment_status
    });
    res.json({
      success: true,
      message: "Success",
      data: { transaction }
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
exports.userTransaction = async (req, res) => {
  try {
    if (req.user != null) {
      const transaction = await Transaction.findAll({
        where: { user_id: req.user },
        include: [
          {
            model: Ticket,
            as: "ticket",
            attributes: [
              "train",
              "class",
              "departure_time",
              "arrival_time",
              "ticket_price",
              "quantities"
            ],
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
            ]
          }
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "ticket_id", "user_id"]
        }
      });
      res.status(200).json({
        success: true,
        message: "Load success",
        data: { transaction }
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No token found",
        data: {}
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
exports.indexTransaction = async (req, res) => {
  try {
    transaction = await Transaction.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["full_name", "user_name"]
        },
        {
          model: Ticket,
          as: "ticket",
          attributes: ["id"],
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
          ]
        }
      ],
      attributes: {
        exclude: ["ticket_id", "user_id", "createdAt", "updatedAt"]
      }
    });
    res.json({
      success: true,
      message: "Success",
      data: { transaction }
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
