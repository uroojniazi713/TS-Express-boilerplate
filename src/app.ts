import express from "express";
import { message } from "./utils/message.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { AppError } from "./errors/AppError.js";
import userRoutes from "./routes/user.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import reportRoutes from "@/routes/report.route.js";
import authRouter from "@/routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message });
});

app.get("/error", (req, res, next) => {
  next(new AppError("User not found",404));
});

app.use("/api/reports", reportRoutes);

app.use("/auth", authRouter);

app.use(userRoutes);

app.use("/api", uploadRoutes);

app.use(errorMiddleware);

export default app;