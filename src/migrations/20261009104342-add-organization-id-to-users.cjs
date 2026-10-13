"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "organizationId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Organizations",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users", "organizationId");
  },
};