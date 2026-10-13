import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";

const router = Router();

router.get(
  "/authorization-test",
  authMiddleware,
  authorize("invoice:create"),
  (_req, res) => {
    res.json({
      success: true,
      message: "You have permission to create invoices",
    });
  },
);

export default router;