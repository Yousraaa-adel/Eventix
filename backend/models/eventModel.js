const mongoose = require('mongoose');
const Slugify = require('slugify');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An event must have a name'],
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
    enum: ['Maadi', 'Downtown', 'Mohandseen'],
  },
  image: {
    type: String,
    required: [true, 'An event must have an image URL'],
  },
  brief: {
    type: String,
    required: [true, 'An event must have a brief description'],
    trim: true,
  },
});

eventSchema.pre('save', function (next) {
  this.slug = Slugify(this.name, { lower: true });
  next();
});

eventSchema.pre('find', function (next) {
  // this.find({ execlusiveEvent: true });
  next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
