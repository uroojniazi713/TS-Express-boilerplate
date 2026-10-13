
import sequelize from "../config/database.js";
import { Role, Permission } from "../models/index.js";

const roleNames = ["admin", "accountant", "viewer"];

const permissionNames = [
  "invoice:create",
  "invoice:read",
  "invoice:update",
  "invoice:delete",
  "customer:read",
  "customer:create",
  "report:read",
  "user:manage",
];

async function seedRBAC() {
  try {
    // Create roles if they don't already exist
    for (const name of roleNames) {
      await Role.findOrCreate({
        where: { name },
        defaults: { name },
      });
    }

    // Create permissions if they don't already exist
    for (const name of permissionNames) {
      await Permission.findOrCreate({
        where: { name },
        defaults: { name },
      });
    }

    const roles = await Role.findAll();
    const permissions = await Permission.findAll();

    const rolePermissions: Record<string, string[]> = {
      admin: permissionNames,

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

    for (const role of roles) {
        // Which permissions should this role have?
      const allowedNames = rolePermissions[role.name];

      if (!allowedNames) continue;

      const allowedPermissions = permissions.filter((permission) =>
        allowedNames.includes(permission.name)
      );

      await role.setPermissions(allowedPermissions);
    }

    console.log("RBAC seed completed successfully");
  } catch (error) {
    console.error("RBAC seed failed:", error);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
}

seedRBAC();