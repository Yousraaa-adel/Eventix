const Order = require('../models/orderModel');
const sendEmail = require('../utls/email');
const QRCode = require('qrcode');

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

  try {
    // Create the order
    const order = await Order.create({
      ...req.body,
    });
    console.log(req.body.eventId.eventName);

    // Generate QR code (e.g., using order or event details)
    const qrData = `Email: ${req.body.email}, Name: ${req.body.firstName} ${req.body.lastName}`; // QR code link
    const qrCodeBuffer = await QRCode.toBuffer(qrData);

    // Send the email with the QR code as an attachment
    await sendEmail({
      email: req.body.email,
      subject: `QR Code for Event`,
      message: `Please find your QR code for the event.`,
      html: `
        <h2>Your QR Code for the Event</h2>
        <p>Scan this QR code to access your event information:</p>
        <img src="cid:qrCodeImage" alt="Event QR Code" height="300" width="300" />
      `,
      attachment: qrCodeBuffer, // Pass the QR code buffer directly
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
