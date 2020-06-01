const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const methodOverride = require('method-override');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const homeRouter = require('./src/routes/home');
const movieRouter = require('./src/routes/movies');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ssshhhhh',
  // create new redis store.
  saveUninitialized: false,
  resave: false
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/movies', movieRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('errors/404');
  //next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errors/error');
});

module.exports = app;
