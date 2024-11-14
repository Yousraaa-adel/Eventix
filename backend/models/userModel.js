const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid Email'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Set a minimum length for better security
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
