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
        type: Sequelize.DATE
      },
      departure_station: {
        type: Sequelize.INTEGER
      },
      departure_time: {
        type: Sequelize.DATE
      },
      destination_station: {
        type: Sequelize.INTEGER
      },
      arrival_time: {
        type: Sequelize.DATE
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
