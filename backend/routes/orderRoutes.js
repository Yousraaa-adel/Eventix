const express = require('express');
const path = require('path');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.param('id', orderController.checkID);

router
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
