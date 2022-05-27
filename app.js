const express = require('express');
const cors = require("cors");
const app = express();
const morgan = require('morgan');

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const sampleRoute = require('./app/routes/sample');

app.use(morgan('dev'));

app.use('/sample', sampleRoute)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;