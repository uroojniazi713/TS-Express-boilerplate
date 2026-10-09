import { Request, Response, NextFunction } from "express";

import {
  revenueByMonth,
  getTopCustomersReport,
} from "@/services/report.service.js";

export const getRevenueByMonthController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await revenueByMonth();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getTopCustomersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const { results, pagination } = await getTopCustomersReport(page, limit);

    res.status(200).json({
      success: true,
      data: results,
      pagination,
    });
  } catch (error) {
    next(error);
  }
};