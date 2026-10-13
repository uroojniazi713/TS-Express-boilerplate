
"use strict";

module.exports = {
  async up(queryInterface) {
    const roles = await Role.findAll();
    const permissions = await Permission.findAll();
    const roleIds = Object.fromEntries(
      roles.map((role) => [role.name, role.id])
    );

    const permissionIds = Object.fromEntries(
      permissions.map((permission) => [permission.name, permission.id])
    );

    const rolePermissions = {
      admin: permissions.map((permission) => permission.name),

      accountant: [
        "invoice:create",
        "invoice:read",
        "invoice:update",
        "customer:read",
        "report:read",
      ],

      viewer: [
        "invoice:read",
        "customer:read",
        "report:read",
      ],
    };

    const now = new Date();
    const records = [];

    for (const [roleName, permissionNames] of Object.entries(rolePermissions)) {
      for (const permissionName of permissionNames) {
        records.push({
          roleId: roleIds[roleName],
          permissionId: permissionIds[permissionName],
          createdAt: now,
          updatedAt: now,
        });
      }
    }

    await queryInterface.bulkInsert("RolePermissions", records);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("RolePermissions", null, {});
  },
};
