import { Router } from "express";
import { Invoice } from "../models/index.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";

const router = Router();

router.get(
  "/invoices",
  authMiddleware,
  authorize("invoice:read"),
  async (req, res, next) => {
    try {
      const organizationId = req.user?.organizationId;

      if (organizationId == null) {
        return res.status(403).json({
          success: false,
          message: "User is not assigned to an organization",
        });
      }

      const invoices = await Invoice.findAll({
        where: { organizationId },
      });

      return res.json({
        success: true,
        data: invoices,
      });
    } catch (error) {
      next(error);
    }
  },
);

export default router;