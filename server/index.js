const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./src/routes/index');
const mongoose = require('mongoose');

const server = express();
const port = 3002;

// MidleWares Express config
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

// routes
server.use('/', router);

// Location of DB
const URI = 'mongodb://127.0.0.1/cash';

// Connection of Mongoose
mongoose.connect(URI, (error) =>
	error ? console.log(`DB error: ${error}`) : console.log('Mongoose connected'),
);

server.listen(port, () => console.log(`Server connected at port: ${port}`));

module.exports = server;
