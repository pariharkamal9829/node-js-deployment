const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middleware
app.use(morgan("dev")); // Logs requests
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Default route
app.get("/", (req, res) => {
    res.send("Hello, World! This is my Node.js REST API.");
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP", message: "Server is running smoothly" });
});

// Dynamic port allocation
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
