const express = require('express');
const path = require('path');
const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();

router.param('id', orderController.checkID);

router
  .route('/')
  .get(authController.protect, orderController.getAllOrders)
  .post(orderController.createOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(authController.protect, orderController.updateOrder)
  .delete(authController.protect, orderController.deleteOrder);

module.exports = router;
