const mongoose = require("mongoose"); // MongoDB ORM

// Defining ticket schema
const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [1, "Title must be at least 1 character long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [1, "Description must be at least 1 character long"],
      maxlength: [100, "Description cannot exceed 100 characters"],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["Active", "Closed"],
      default: "Active",
    },
    priority: {
      type: String,
      required: [true, "Priority is required"],
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating Ticket model from schema
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
