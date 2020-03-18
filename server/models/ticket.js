"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      train: DataTypes.STRING,
      class: DataTypes.ENUM(["economy", "business", "executive"]),
      departure_date: DataTypes.DATE,
      departure_station: DataTypes.INTEGER,
      departure_time: DataTypes.DATE,
      destination_station: DataTypes.INTEGER,
      arrival_time: DataTypes.DATE,
      ticket_price: DataTypes.INTEGER,
      quantities: DataTypes.INTEGER
    },
    {}
  );
  ticket.associate = function(models) {
    // associations can be defined here
    ticket.belongsTo(models.station, {
      as: "departure",
      foreignKey: "departure_station"
    });
    ticket.belongsTo(models.station, {
      as: "destination",
      foreignKey: "destination_station"
    });
  };
  return ticket;
};
