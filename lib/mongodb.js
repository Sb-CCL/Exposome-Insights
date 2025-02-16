const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(`Failed to connect to MongoDB: ${err}`);
    process.exit(1);
  }
}

async function startServer(app, port) {
  try {
    await connectToDatabase();

    const server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM signal received: shutting down server gracefully");
      server.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err) => {
      console.log(`Unhandled rejection: ${err}`);
      server.close(() => {
        process.exit(1);
      });
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      console.log(`Uncaught exception: ${err}`);
      server.close(() => {
        process.exit(1);
      });
    });
  } catch (err) {
    console.log(`Failed to start server: ${err}`);
    process.exit(1);
  }
}

module.exports = { startServer };
