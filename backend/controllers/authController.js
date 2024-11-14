const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  try {
    const token = signToken(user._id);
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // Allow cross-site cookies
    };
    // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.cookie('jwt', token, cookieOptions);

    // Remove password from output
    user.password = undefined;

    console.log(token);
    return res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Protect Routes
exports.protect = async (req, res, next) => {
  let token;
  console.log('in protection route. Token:', req.cookies.jwt);
  // console.log(req.cookies.jwt);
  // Check for token in Authorization header or cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'You are not logged in! Please log in to get access.',
    });
  }

  try {
    // Verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user exists in the database
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'User belongs to this token no longer exists.',
      });
    }

    // // Check if user changed password after the token was issued
    // if (currentUser.changedPasswordAfter(decoded.iat)) {
    //   return next(
    //     new AppError('Password recently changed! Please log in again.', 401),
    //   );
    // }

    // Grant access to the route
    req.user = currentUser;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'Failed to authenticate. Please try again.',
    });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
      email: req.body.email,
      password: hashedPassword,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Login User
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body.email);
    console.log(req.body.password);

    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password',
      });
    }

    // Find the user by email and include the password field
    const user = await User.findOne({ email }).select('+password');

    // Check if user exists and if the password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password',
      });
    }

    // If login is successful, create and send token
    createSendToken(user, 200, res);
    console.log('Login Successful');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// // console.log(password, user.password);
// if (!user || !(await user.correctPassword(password, user.password))) {
//   return next(new AppError('Incorrect email or password', 401));
// }

// authController.js

// authController.js (Backend)
// exports.logout = (req, res) => {
//   try {
//     res.clearCookie('jwt', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'None',
//     });
//     res.cookie();

//     res.status(200).json({
//       status: 'success',
//       message: 'You have logged out successfully from backend!',
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: 'fail',
//       message: 'Error logging you out:',
//       error,
//     });
//   }
// };

exports.logout = async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0), // Set cookie expiration date to the past
    secure: process.env.NODE_ENV === 'production', // Set secure only in production
  });
  console.log('Logging out from backend');
  res
    .status(200)
    .json({ status: 'success', message: 'Logged out successfully!' });
};
