const mongoose = require("mongoose"); // MongoDB ORM

// Middleware to validate ticket ID
const validateTicketId = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ticket ID." });
  }
  next();
};

// Middleware to validate ticket data
const validateTicketData = (req, res, next) => {
  const { title, description, status, priority } = req.body;

  // Validating title length
  if (!title || title.length < 1 || title.length > 100) {
    return res.status(400).json({
      error: "Please enter a title that is between 1 to 100 characters long.",
    });
  }

  // Validating description length
  if (description && (description.length < 1 || description.length > 100)) {
    return res.status(400).json({
      error:
        "Please enter a description that is between 1 to 100 characters long.",
    });
  }

  // Validating status
  if (status && !["Active", "Closed"].includes(status)) {
    return res.status(400).json({
      error: "Status must be either 'Active' or 'Closed'.",
    });
  }

  // Validating priority
  if (priority && !["Low", "Medium", "High"].includes(priority)) {
    return res.status(400).json({
      error: "Priority must be 'Low', 'Medium', or 'High'.",
    });
  }

  next();
};

module.exports = {
  validateTicketId,
  validateTicketData,
};
