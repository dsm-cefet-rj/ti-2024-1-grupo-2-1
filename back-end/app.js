var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var animalsRouter = require('./routes/animals');
var favAnimalsRouter = require('./routes/favorites');
var schedulingRouter = require('./routes/scheduling');
var adoptionRouter = require('./routes/adoption');
const mongoose = require("mongoose");
// const Animais = require('./model/animais')

var config = require("./config");

const url =config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("conectado corretamente")

}, (err)=>{console.log(err);})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/userDB', usersRouter);
app.use('/animals', animalsRouter);
app.use('/favoriteAnimals', favAnimalsRouter);
app.use('/schedulingRegister', schedulingRouter);
app.use('/animalsAdoptionRegister', adoptionRouter);

module.exports = app;
