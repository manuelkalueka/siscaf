var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

const bodyParser = require('body-parser');

// Routas-----------------------------------

var indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registarRouter = require('./routes/registar');
const dashboardRouter = require('./routes/dashboard');
const alunosRouter = require('./routes/alunos');
const mainRouter = require('./routes/main');
//---------------------------------------

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*Conf para aceitar metodos put e delete*/
app.use(methodOverride((req, res, next) => {
  if (req.body && typeof req.body == 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return req.body._method;
  }
}));

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', registarRouter);
app.use('/', dashboardRouter);
app.use('/', alunosRouter);
app.use('/', mainRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
