const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const eventRouter = require('./routes/eventRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  // Logging entries middleware
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(express.json());

// ROUTES (Mounting Routes)
app.use('/api/v1/events', eventRouter);
app.use('/api/v1/users', userRouter);

// Unhandled Routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't seem to find ${req.originalUrl} on this server!`,
  });
  next();
});

module.exports = app;
