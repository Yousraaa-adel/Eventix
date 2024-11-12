const Event = require('../models/eventModel');

exports.checkID = async (req, res, next, val) => {
  const event = await Event.findById(val);
  if (!event) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllEvents = async (req, res) => {
  try {
    // Destructure category and location from query parameters
    const { category, location } = req.query;

    // Build the filter object based on query parameters
    let filter = {};

    if (category) {
      filter.category = category; // Filter by category if provided
    }

    if (location) {
      filter.location = location; // Filter by location if provided
    }

    // Find the events that match the filter
    const events = await Event.find(filter);

    res.status(200).json({
      status: 'success',
      results: events.length,
      data: {
        events,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);

    res.status(200).json({
      status: 'success',
      data: {
        event,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createEvent = async (req, res) => {
  console.log('Data received for event creation:', req.body);
  // console.log('Uploaded file:', req.file);

  try {
    const event = await Event.create({
      ...req.body,
      imagePath: req.file ? req.file.path : null,
    });

    res.status(201).json({
      status: 'success',
      data: {
        event,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    // Use 'new: true' to return the updated document after the update
    const eventToUpdate = await Event.findByIdAndUpdate(eventId, req.body, {
      new: true, // Ensure that the updated event is returned
      runValidators: true, // Optional: this ensures that the update respects your validation rules
    });

    if (!eventToUpdate) {
      return res.status(404).json({
        status: 'fail',
        message: 'Event not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        eventToUpdate,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
