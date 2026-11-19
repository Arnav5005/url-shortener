import generateShortCode from "../services/shortCode.service.js";

export function createShortUrl(req, res) {
    const { originalUrl } = req.body;

    const shortCode = generateShortCode();

    res.status(201).json({
        message: "Short URL generated successfully",
        originalUrl,
        shortCode
    });
}
