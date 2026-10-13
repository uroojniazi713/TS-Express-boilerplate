import type { Request, Response, NextFunction } from "express";
import { User, Role, Permission } from "../models/index.js";

export const authorize = (permissionName: string) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      // Check whether the user is authenticated
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required",
        });
      }

      // Find the user, their role, and the role's permissions
      const user = await User.findByPk(req.user.userId, {
        include: [
          {
            model: Role,
            as: "role",
            include: [
              {
                model: Permission,
                as: "permissions",
                through: { attributes: [] },
              },
            ],
          },
        ],
      });

      // Check whether the user exists and has a role
      if (!user || !user.role) {
        return res.status(403).json({
          success: false,
          message: "User role not assigned",
        });
      }

      // Check whether the role has the required permission
      const permissions = user.role.permissions as Permission[];

      const hasPermission = permissions.some(
        (permission) => permission.name === permissionName,
      );

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to perform this action",
        });
      }

      // Permission granted: continue to the next middleware
      next();
    } catch (error) {
      next(error);
    }
  };
};
