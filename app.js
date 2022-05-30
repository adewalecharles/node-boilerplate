require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
/**
 * morgan logs every http request by default to the console .. you can set it to log to a file instead
 */
const logger = require("morgan");
/**
 * helmet is a middleware that adds and removes some headers for adding more security
 */
const helmet = require("helmet");
/**
 * const debug = require("debug")("app:log"); // You are free to name the debug namespace as you like
 * +0ms is time spent from the last debug message
 */
const debug = require("debug")("app:db");

/**
 * Registering all seq
 */
const models = require("./app/models");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");


const app = express();
app.use(helmet());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
if (process.env.NODE_ENV !== "production") app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

//sync Database
models.sequelize
  .sync()
  .then(() => {
    debug("Connection has been established successfully.");
  })
  .catch(err => {
    debug("Unable to connect to the database:", err);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;