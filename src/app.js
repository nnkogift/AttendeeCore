var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var domainRouter = require('./routes/domain');
var repoRouter = require('./routes/repo');
var projectRouter = require('./routes/project');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/domain', domainRouter);
app.use('/project', projectRouter);
app.use('/repo', repoRouter);

module.exports = app;
