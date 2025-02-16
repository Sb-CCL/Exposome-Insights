// Load environment variables from .env file
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create the Express app and define Routes
const app = express();
const ticketRoutes = require("./routes/ticketRoutes");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());

// Enable CORS for all requests
const allowedOrigins = [
  "http://localhost:3000",
  "https://exposome-insights.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log(`Origin: ${origin}`); // Log the origin
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`Origin not allowed by CORS: ${origin}`); // Log the error
        callback(new Error("Origin not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to log request paths and methods
app.use((req, res, next) => {
  console.log(`Request Path: ${req.path}, Method: ${req.method}`);
  next();
});

// Mount the routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB and start the server
const { startServer } = require("./lib/mongodb");
const PORT = process.env.PORT || 5000;

startServer(app, PORT);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.stack}`);
  res.status(500).send("Something went wrong!");
});
