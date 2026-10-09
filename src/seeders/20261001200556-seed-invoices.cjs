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
      {
        organizationId: 1,
        customerId: 4,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        customerId: 5,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        customerId: 6,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        customerId: 7,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        customerId: 8,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 9,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 10,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 11,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 12,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 13,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 14,
        status: "paid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        customerId: 15,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Invoices", null, {});
  },
};