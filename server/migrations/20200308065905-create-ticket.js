"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      train: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.ENUM,
        values: ["economy", "business", "executive"],
        defaultValue: null
      },
      departure_date: {
        type: Sequelize.STRING
      },
      departure_station: {
        type: Sequelize.STRING
      },
      departure_time: {
        type: Sequelize.STRING
      },
      destination_station: {
        type: Sequelize.STRING
      },
      arrival_time: {
        type: Sequelize.STRING
      },
      ticket_price: {
        type: Sequelize.STRING
      },
      quantities: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tikets");
  }
};
