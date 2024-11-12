const Order = require('../models/orderModel');

exports.checkID = async (req, res, next, val) => {
  const order = await Order.findById(val);
  if (!order) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate(
        'eventId',
        'eventName date category price location ticketsBooked status time',
      )
      .exec(); // Populate event fields

    res.status(200).json({
      status: 'success',
      results: orders.length,
      data: {
        orders,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId)
      .populate(
        'eventId',
        'eventName date category price location ticketsBooked status time',
      )
      .exec(); // Populate event fields

    res.status(200).json({
      status: 'success',
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createOrder = async (req, res) => {
  console.log('Data received for order creation:', req.body);
  // console.log('Uploaded file:', req.file);

  try {
    const order = await Order.create({
      ...req.body,
    });

    res.status(201).json({
      status: 'success',
      data: {
        order,
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

exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderToUpdate = await Order.findByIdAndUpdate(orderId, req.body);

    orderToUpdate.save();

    res.status(200).json({
      status: 'success',
      data: {
        orderToUpdate,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    await Order.findByIdAndDelete(orderId);

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
