import express from "express";
import { message } from "./utils/message.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message });
});

export default app;
