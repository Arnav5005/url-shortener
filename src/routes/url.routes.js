import express from "express";
import validateUrl from "../middleware/validateUrl.js";
import { createShortUrl } from "../controllers/url.controller.js";

const router = express.Router();

// Create short URL
// router.post("/", validateUrl, (req, res) => {
//     const {originalUrl} = req.body;
//     res.status(201).json({
//         message: "URL validation successful",
//         originalUrl: originalUrl
//     });
// });
router.post("/", validateUrl, createShortUrl);

export default router;