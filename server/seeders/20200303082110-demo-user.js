"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          role: "user",
          full_name: "suhartono",
          user_name: "suhartono",
          email: "suhartono@gmail.com",
          password: "qwerty",
          gender: "male",
          phone: "083896831233",
          address: "Tangerang Selatan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role: "admin",
          full_name: "risky",
          user_name: "risky saputra",
          email: "riskyeeq@gmail.com",
          password: "30second",
          gender: "male",
          phone: "083896831233",
          address: "Tangerang Selatan",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
