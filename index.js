const http = require('http');

// using the createServer function we can actually create a basic http server using http module.
// This function returns a server object, and takes a callback as an argument.
// The callback which we are passing is actually a request listener function
// Requiest listener means that when we make an http request to our server, that http request is going to be listened/collected by this callback function.

const server = http.createServer(function listener(){

}); 