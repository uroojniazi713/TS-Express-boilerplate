"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("InvoiceItems", [
      // Existing data
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

      // New data
      {
        invoiceId: 4,
        productId: 1,
        quantity: 2,
        unitPrice: 100.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 5,
        productId: 2,
        quantity: 3,
        unitPrice: 50.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 6,
        productId: 3,
        quantity: 4,
        unitPrice: 75.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 7,
        productId: 1,
        quantity: 1,
        unitPrice: 300.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 8,
        productId: 2,
        quantity: 5,
        unitPrice: 40.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 9,
        productId: 3,
        quantity: 2,
        unitPrice: 125.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 10,
        productId: 1,
        quantity: 3,
        unitPrice: 200.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 11,
        productId: 2,
        quantity: 2,
        unitPrice: 175.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 12,
        productId: 3,
        quantity: 6,
        unitPrice: 50.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 13,
        productId: 1,
        quantity: 2,
        unitPrice: 275.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 14,
        productId: 2,
        quantity: 4,
        unitPrice: 90.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        invoiceId: 15,
        productId: 3,
        quantity: 3,
        unitPrice: 150.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("InvoiceItems", null, {});
  },
};