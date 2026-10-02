import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js"

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};