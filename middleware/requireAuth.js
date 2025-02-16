const jwt = require("jsonwebtoken"); // JSON Web Tokens
const User = require("../models/userModel"); // User model

// Middleware for requiring authentication
const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  // Checking if authorization token is provided
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // Extracting token from authorization header
  const token = authorization.split(" ")[1];

  try {
    // Verifying token and extracting user ID
    const { _id } = jwt.verify(token, process.env.SECRET);

    // Fetching user details from database based on user ID
    req.user = await User.findOne({ _id }).select("_id");

    // Proceeding to the next middleware
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

// Exporting requireAuth middleware
module.exports = requireAuth;
