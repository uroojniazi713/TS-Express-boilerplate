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
      {
        organizationId: 1,
        name: "Ahmed Raza",
        email: "ahmed@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Fatima Noor",
        email: "fatima@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Usman Ali",
        email: "usman@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Ayesha Malik",
        email: "ayesha@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Hamza Khan",
        email: "hamza@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Hira Ahmed",
        email: "hira@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Bilal Hussain",
        email: "bilal@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Maham Tariq",
        email: "maham@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Omer Farooq",
        email: "omer@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Zainab Ali",
        email: "zainab@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 2,
        name: "Danish Iqbal",
        email: "danish@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        organizationId: 1,
        name: "Sana Khan",
        email: "sana@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};