const models = require("../models");
const Station = models.station;

exports.indexStation = async (req, res) => {
  try {
    const station = await Station.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    res.json({
      success: true,
      message: "Success",
      data: { station }
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something Wrong",
      data: {}
    });
  }
};
