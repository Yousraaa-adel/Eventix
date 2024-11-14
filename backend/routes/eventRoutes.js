const express = require('express');
const multer = require('multer');
const path = require('path');
const eventController = require('../controllers/eventController');
const authController = require('../controllers/authController');

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads')); // Path to the uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.param('id', eventController.checkID);

router
  .route('/')
  .get(eventController.getAllEvents)
  .post(
    authController.protect,
    upload.single('image'),
    eventController.createEvent,
  );

router
  .route('/:id')
  .get(eventController.getEvent)
  .patch(
    authController.protect,
    upload.single('image'),
    eventController.updateEvent,
  )
  .delete(authController.protect, eventController.deleteEvent);

module.exports = router;
