const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Order schema
const orderSchema = new Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event', // Reference to the Event model
      required: true, // Event ID is required
    },
    firstName: {
      type: String,
      required: [true, 'First name is required'], // First name is required
      trim: true, // Remove leading/trailing spaces
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'], // Last name is required
      trim: true, // Remove leading/trailing spaces
    },
    email: {
      type: String,
      required: [true, 'Email is required'], // Email is required
      unique: true, // Email should be unique
      validate: {
        validator: function (v) {
          // Regex for basic email validation
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: 'Invalid email format', // Error message for invalid email format
      },
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'], // Phone number is required
      validate: {
        validator: function (v) {
          // Regex for validating phone number (you can adjust based on your country)
          // return /^\d{10}$/.test(v);
        },
        message: 'Invalid phone number format', // Error message for invalid phone number format
      },
    },
    ticketsBooked: {
      type: Number,
      required: [true, 'Tickets booked are required'], // Tickets booked is required
      min: [1, 'At least one ticket must be booked'], // Minimum of 1 ticket
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt timestamps
  },
);

// Create the Order model from the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
