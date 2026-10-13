import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
throw new Error("JWT_SECRET is not defined");
}

export const authMiddleware = async (
req: Request,
res: Response,
next: NextFunction,
) => {
try {
const authHeader = req.headers.authorization;

if (!authHeader) {
  return res.status(401).json({
    success: false,
    message: "Access token is required",
  });
}

const token = authHeader.split(" ")[1];

if (!token) {
  return res.status(401).json({
    success: false,
    message: "Access token is required",
  });
}

const decoded = jwt.verify(token, JWT_SECRET) as {
  userId: number;
};

const user = await User.findByPk(decoded.userId);

if (!user) {
  return res.status(401).json({
    success: false,
    message: "User not found",
  });
}

req.user = {
  userId: user.id,
  organizationId: user.organizationId,
};

next();

} catch (error) {
next(error);
}
};
