// userRoutes.js
const express = require("express");

// controller functions
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// register router
router.post("/register", registerUser);

module.exports = router;
