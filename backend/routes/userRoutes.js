const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Route to check if user is authenticated
router.get('/check-auth', authController.protect, (req, res) => {
  // If the user reaches here, they are authenticated
  console.log('Printing token from check-auth route:', req.cookies.jwt);
  return res.status(200).json({
    status: 'success',
    message: 'User is authenticated',
    user: req.user,
    token: req.cookies.jwt,
  });
});

// Add the logout route
// Logout route
router.get('/logout', authController.logout);

router
  .route('/')
  .get(authController.protect, userController.getAllUsers)
  .post(authController.protect, userController.createUser);

router
  .route('/:id')
  .get(authController.protect, userController.getUser)
  .patch(authController.protect, userController.updateUser)
  .delete(authController.protect, userController.deleteUser);

module.exports = router;
