
"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("Roles", [
      { name: "admin", createdAt: now, updatedAt: now },
      { name: "accountant", createdAt: now, updatedAt: now },
      { name: "viewer", createdAt: now, updatedAt: now },
    ]);

    await queryInterface.bulkInsert("Permissions", [
      { name: "invoice:create", createdAt: now, updatedAt: now },
      { name: "invoice:read", createdAt: now, updatedAt: now },
      { name: "invoice:update", createdAt: now, updatedAt: now },
      { name: "invoice:delete", createdAt: now, updatedAt: now },
      { name: "customer:read", createdAt: now, updatedAt: now },
      { name: "customer:create", createdAt: now, updatedAt: now },
      { name: "report:read", createdAt: now, updatedAt: now },
      { name: "user:manage", createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Permissions", null, {});
    await queryInterface.bulkDelete("Roles", null, {});
  },
};