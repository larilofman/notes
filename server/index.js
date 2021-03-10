const { ApplicationError } = require('@util/customErrors');
const express = require('express');
const routes = require('@util/routes');
const errorMiddleware = require('@middleware/errorMiddleware');

const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


let url = process.env.MONGODB_URI;
if (process.env.NODE_ENV === 'test') {
  url = process.env.TEST_MONGODB_URI;
}

if (process.env.NODE_ENV !== 'test') {
  mongoose.connection.on('connected', () => {
    console.log('Connection Established');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('Connection Reestablished');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Connection Disconnected');
  });

  mongoose.connection.on('close', () => {
    console.log('Connection Closed');
  });

  mongoose.connection.on('error', (error) => {
    console.log(`ERROR: ${error}`);
  });
}

if (url) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  throw new ApplicationError('No mongodb url provided', 500);
}

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
