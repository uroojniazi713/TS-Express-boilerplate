"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Products", [
      {
        organizationId: 1,
        name: "Laptop",
        price: 1200.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Wireless Mouse",
        price: 25.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Keyboard",
        price: 45.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};