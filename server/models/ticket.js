"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      train: DataTypes.STRING,
      class: DataTypes.ENUM(["economy", "business", "executive"]),
      departure_date: DataTypes.STRING,
      departure_station: DataTypes.STRING,
      departure_time: DataTypes.STRING,
      destination_station: DataTypes.STRING,
      arrival_time: DataTypes.STRING,
      ticket_price: DataTypes.STRING,
      quantities: DataTypes.INTEGER
    },
    {}
  );
  ticket.associate = function(models) {
    // associations can be defined here
  };
  return ticket;
};
