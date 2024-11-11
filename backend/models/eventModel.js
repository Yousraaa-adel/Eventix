const mongoose = require('mongoose');
const Slugify = require('slugify');

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, 'An event must have a name'],
    uniue: true,
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'An event must have a category'],
    enum: ['workshop', 'educational', 'cultural'],
  },
  price: {
    type: Number,
    required: [true, 'An event must have a price'],
    min: [0, 'Price must be above zero'],
  },
  date: {
    type: Date,
    required: [true, 'An event must have a date'],
  },
  time: {
    type: String,
    required: [true, 'An event must have a time'],
  },
  location: {
    type: String,
    required: [true, 'An event must have a location'],
    enum: ['Maadi', 'Downtown', 'Zamalek'],
  },
  image: {
    type: String,
    // required: [true, 'An event must have an image URL'],
  },
  brief: {
    type: String,
    required: [true, 'An event must have a brief description'],
    trim: true,
  },
  ticketsBooked: {
    type: String,
    required: [true, 'An event must have a tickets booked'],
    default: '0',
  },
  status: {
    type: String,
    required: [true, 'An event must have a status'],
    enum: ['upcoming', 'in progress', 'done'],
    default: 'upcoming', // Optional: Set default status
  },
});

eventSchema.pre('find', function (next) {
  // this.find({ execlusiveEvent: true });
  next();
});

eventSchema.pre('save', function (next) {
  console.log('Event name:', this.eventName);
  if (this.eventName) {
    this.slug = Slugify(this.eventName, { lower: true });
  } else {
    this.slug = ''; // Set a default value or handle as necessary
  }
  next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
