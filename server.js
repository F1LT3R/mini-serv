#!/usr/bin/env node

var port = 8080;

var connect = require('connect')
  , serveStatic = require('serve-static')
  , livereload = require('livereload')
  ;

// Create the http server
connect().use(serveStatic('./')).listen(port);

// Create the livereload server and start watching
server = livereload.createServer();
server.watch('./');

console.log('miniserv listening on localhost:'+port);