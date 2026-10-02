"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("InvoiceItems", [
      {
        invoiceId: 1,
        productId: 1,
        quantity: 1,
        unitPrice: 1200.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 1,
        productId: 2,
        quantity: 2,
        unitPrice: 25.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 2,
        productId: 2,
        quantity: 1,
        unitPrice: 25.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 3,
        productId: 3,
        quantity: 2,
        unitPrice: 45.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("InvoiceItems", null, {});
  },
};