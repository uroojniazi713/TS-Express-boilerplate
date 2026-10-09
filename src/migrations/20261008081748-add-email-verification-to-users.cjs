"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "emailVerified", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.addColumn("users", "verificationTokenHash", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn(
      "users",
      "verificationTokenExpiresAt",
      {
        type: Sequelize.DATE,
        allowNull: true,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users", "emailVerified");
    await queryInterface.removeColumn(
      "users",
      "verificationTokenHash",
    );
    await queryInterface.removeColumn(
      "users",
      "verificationTokenExpiresAt",
    );
  },
};