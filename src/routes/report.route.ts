import { Router } from "express";
import { getRevenueByMonthController, getTopCustomersController } from "@/controllers/report.controller.js";

const router = Router();

router.get("/revenue-by-month", getRevenueByMonthController);

router.get("/top-customers", getTopCustomersController);

export default router;