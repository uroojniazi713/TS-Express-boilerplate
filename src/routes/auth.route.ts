import { Router } from "express";

import {
  registerController,
  loginController,
  refreshController,
  logoutController,
  verifyEmailController,
  forgotPasswordController,
  resetPasswordController,
  logoutAllDevicesController,
  getActiveSessionsController,
} from "@/controllers/auth.controller.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh", refreshController);
router.post("/logout", logoutController);
router.get("/verify-email", verifyEmailController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);
router.post(
    "/logout-all",
    authMiddleware,
    logoutAllDevicesController,
  );
router.get("/sessions", authMiddleware, getActiveSessionsController);
export default router;