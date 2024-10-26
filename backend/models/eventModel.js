const mongoose = require('mongoose');
const Slugify = require('slugify');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An event must have a name'],
    unique: [true, 'An event name must be unique'],
    trim: true,
    maxlength: [60, 'An event name must have less or equal to 60 characters'],
    minlength: [10, 'An event name must have more or equal to 60 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'An event must have a description'],
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'An event must have a date'],
  },
  location: {
    type: String,
    required: [true, 'An event must have a location'],
    trim: true,
  },
  capacity: {
    type: Number,
    required: [true, 'An event must have a capacity'],
  },
  category: {
    type: String,
    required: [true, 'An event must have a category'],
    enum: {
      values: ['online', 'offline'],
      message: 'A category must be either: online or offline',
    },
    default: 'offline',
  },
  status: {
    type: String,
    required: [true, 'An event must have a status'],
    enum: {
      values: ['upcoming', 'ongoing', 'completed', 'canceled'],
      message:
        'A status must be one of the following: [upcoming, ongoing, completed, canceled]',
    },
    default: 'upcoming',
  },
  execlusiveEvent: {
    type: Boolean,
    default: false,
  },
  // imageCover: {
  //   type: String,
  //   required: [true, 'An event must have an image cover'],
  // },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

eventSchema.pre('save', function (next) {
  this.slug = Slugify(this.name, { lower: true });
  next();
});

eventSchema.pre('find', function (next) {
  this.find({ execlusiveEvent: true });
  next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
