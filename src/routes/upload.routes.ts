import { Router } from "express";
import upload from "../config/multer.js";

const router = Router();

router.post("/logo", upload.single("logo"), (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Logo uploaded successfully",
    file: req.file,
  });
});

export default router;