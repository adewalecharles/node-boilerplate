const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const sampleRoute = require('./app/routes/sample');

app.use(morgan('dev'));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// cors error handling middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Orign, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


// sample route
app.use('/sample', sampleRoute)


// error handler for unknown route
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});


// general error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;