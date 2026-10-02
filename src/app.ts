import express from "express";
import { message } from "./utils/message.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { AppError } from "./errors/AppError.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message });
});

app.get("/error", (req, res, next) => {
  next(new AppError("User not found",404));
});

app.use(userRoutes);

app.use(errorMiddleware);

export default app;