require("dotenv").config();

const jwt = require("jsonwebtoken");
const models = require("../models");

const User = models.user;

exports.auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ where: { id: data.user_id } });
    if (!user) {
      throw new Error();
    }
    req.user = user.id;
    // req.level = user.level;
    req.token = token;
    next();
  } catch (err) {
    // console.log(err);
    res.status(401).json({
      success: false,
      message: "Authorization Required",
      data: {}
    });
  }
};
