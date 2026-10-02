"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Organizations", [
      {
        name: "ABC Company",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "XYZ Corporation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Organizations", null, {});
  },
};