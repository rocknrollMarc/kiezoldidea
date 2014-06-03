var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

require('./app_server/models/db');

var readLine = require('readLine');
if (process.platform === 'win32') {
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
});
rl.on("SIGINT", function() {
    process.emit("SIGINT");
});
}

var dbURI = 'mongodb://localhost/loc8r';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ', + err);
});

mongoose.connection.on('disconnected', function() {
   console.log('Mongoose disconnected');
});