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
    const allEvents = await Event.find();

    res.status(200).json({
      status: 'success',
      results: allEvents.length,
      data: {
        allEvents,
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
  try {
    const eventId = req.params.id;
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

exports.ceateEvent = async (req, res) => {
  // console.log('Entire request:', req);
  // console.log('Request headers:', req.headers);
  console.log('Data received for event creation:', req.body);

  try {
    const event = await Event.create(req.body);

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
    const eventToUpdate = await Event.findByIdAndUpdate(eventId, req.body);

    eventToUpdate.save();

    res.status(200).json({
      status: 'success',
      data: {
        eventToUpdate,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
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
