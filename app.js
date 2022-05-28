const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./app/database/index');

db.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});


app.use(morgan('dev'));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// cors error handling middleware
app.use(require('./app/http/utils/cors'));


// sample route
app.use('/sample', require('./app/routes/sample'))


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