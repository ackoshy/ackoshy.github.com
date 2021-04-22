'use strict';

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/source/index.html');
})
app.use('/', express.static(__dirname + '/source'));

serv.listen(5000);