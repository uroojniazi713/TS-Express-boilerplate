"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Customers", [
      {
        organizationId: 1,
        name: "Ali Khan",
        email: "ali@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Sara Ahmed",
        email: "sara@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "John Smith",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};