#!/usr/bin/env node

// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080);

// livereload = require('livereload');
// server = livereload.createServer();
// server.watch(__dirname);
// 
// 
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./')).listen(8080);

livereload = require('livereload');
server = livereload.createServer();
server.watch('./');