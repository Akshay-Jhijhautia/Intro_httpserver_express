const http = require('http'); // required the http module to create http server, without using third party package

const PORT = 3000;

/*
Using the createServer function we can actually create a basic http server using http module.
This function returns a server object, and takes a callback as an argument.
The callback which we are passing is actually a request listener function
Requiest listener means that when we make an http request to our server, that http request is going to be listened/collected by this callback function.
This function created a server object, but didn't start the server
This server is not on the internet, it is own our machine and accessible only to our machine.
*/

const server = http.createServer(function listener(request, response){
    /*  -We need to bind this server object with a port.
        -Every http request comes to this listener function
        -Request is an object, using request, we will be able to see the details of incoming http request 
        -Response is and object, using response, we will be able to configure what response we need to send, 
         for an incoming http request.
        -Requests made from browser are GET requests.
        -In the resquest, there is a property of url='/', so anything that comes after '/', is 
         collected by the url property of request object.
    */  

    //console.log("Incoming request details", request);
    //console.log("Response object details",response);

    if(request.url === '/home') {
        // if we make a request on '/home', this if block will be executed
        console.log(request.method); // Will output the nature to request made using http server ex. GET, PUT, POST, DELETE
        response.end('Welcome to home');
    }
    console.log("Request Received"); 

}); 


// listen function starts the server.
// It expects a callback

server.listen(PORT, function exec() {
    // Once we successfully boot up the server on the given port, this callback w
    // will be executed.
    console.log(`Server started on port ${PORT}`);
});