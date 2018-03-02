var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var todos = require('./models/todomodel');
var setupCon = require('./controller/setupController');
var apiCon = require('./controller/apiController');
var app = express();

mongoose.connect(config.getDbConnectionString());

var port = process.env.PORT || 3000;

app.set('view enginee','ejs');

app.use('/assets', express.static(__dirname + '/public'));

setupCon(app);
apiCon(app);

app.listen(port);
