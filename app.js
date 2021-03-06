var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//DB config
const db = require('./config/keys.js').mongoURI;

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imageRouter = require('./routes/images');
var test = require('./routes/testing');

var app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//testing
//Connection to DB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected successfully'))
  .then(() => console.log('Main port is 3001'))
  .catch((err) => console.log(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//General setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routes access
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/images', imageRouter);
app.use('/api', test);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
