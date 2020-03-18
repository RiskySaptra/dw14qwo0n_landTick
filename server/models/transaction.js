"use strict";
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction",
    {
      user_id: DataTypes.INTEGER,
      ticket_id: DataTypes.INTEGER,
      payment_slip: DataTypes.STRING,
      payment_status: DataTypes.ENUM(["pending", "approved"])
    },
    {}
  );
  transaction.associate = function(models) {
    transaction.belongsTo(models.user, {
      // as: "user",
      foreignKey: "user_id"
    });
    transaction.belongsTo(models.ticket, {
      foreignKey: "ticket_id"
    });
  };
  return transaction;
};
