import express from 'express'
import urlRoutes from "./routes/url.routes.js";

const app = express();

// Middleware 1: Parse incoming JSON request bodies
app.use(express.json()); // now we can use req.body

// Middleware 2: Log incoming HTTP requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}`);
    next();
});

// Route 1: Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "URL Shortener API is running"
    });
});

// Route 2: Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime()
    });
});

// Mount URL routes
app.use("/api/urls", urlRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

export default app;