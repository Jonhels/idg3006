require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const http = require("http");

// Import routes from the routes folder
const mikrobitRoute = require("./routes/mikrobitRoute");
const {setupWebSocket} = require("./routes/websocketRoute");

const app = express(); // Create an express app
const server = http.createServer(app); // Websocket setup

app.use(logger("tiny")); // Log http requests to the console
app.use(helmet()); // Secure the app by setting various HTTP headers
// Parse incoming requests to JSON
app.use(bodyParser.json());

// Connect to the database and start the server
dbConnect().then(() => {
    const PORT = process.env.PORT || 4000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// Cors
const whitelist = [
    "http://localhost:3000",
    "http://localhost:4000",
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_PROD,
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));

// Set up WebSocket and get the io instance
const io = setupWebSocket(server);

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.get("/sab", (req, res) => {
    res.send("Welome to my world");
});

// Mikrobit routes
app.use("/api", mikrobitRoute(io)); // Passing 'io' instance to the routes

// Shutdown gracefully
const gracefulShutdown = async () => {
    console.log("Shutting down gracefully...");
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
};

process.on("SIGINT", gracefulShutdown); // Listen for the SIGINT signal (Ctrl+C)
process.on("SIGTERM", gracefulShutdown); // Listen for the SIGTERM which is the signal sent by the process manager to shut down the process
