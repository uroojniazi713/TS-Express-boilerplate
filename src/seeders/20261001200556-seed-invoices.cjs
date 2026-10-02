"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Invoices", [
      {
        organizationId: 1,
        customerId: 1,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        customerId: 2,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 3,
        status: "draft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Invoices", null, {});
  },
};