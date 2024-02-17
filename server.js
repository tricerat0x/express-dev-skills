const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const port = 3000;
const skillsRouter = require('./routes/skills')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(function(req, res, next){
console.log('Hello SEI!')
next()
});
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', skillsRouter);

app.listen(port)


