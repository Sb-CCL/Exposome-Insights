const mongoose = require("mongoose"); // MongoDB ORM
const bcrypt = require("bcrypt"); // Password hashing
const validator = require("validator"); // Data validation

// Defining MongoDB schema
const Schema = mongoose.Schema;

// Salt rounds for password hashing
const SALT_ROUNDS = 10;

// User schema definition
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Validation function for email
const validateEmail = (email) => {
  if (!email) {
    throw new Error("Please enter a valid email address");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email format");
  }
};

// Validation function for password
const validatePassword = (password) => {
  if (!password) {
    throw new Error("Please enter a valid password");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password requires: 8+ characters, 1 uppercase, 1 lowercase, 1 number, 1 symbol"
    );
  }
};

// Static method to register a new user
userSchema.statics.register = async function (
  firstName,
  lastName,
  email,
  password
) {
  try {
    validateEmail(email);
    validatePassword(password);

    const existingUser = await this.findOne({ email });
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await this.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return newUser;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

// Static method for user login
userSchema.statics.login = async function (email, password) {
  try {
    validateEmail(email);
    validatePassword(password);

    const user = await this.findOne({ email });
    if (!user) {
      throw new Error("Email not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }

    return user;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

// Creating User model from schema
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
