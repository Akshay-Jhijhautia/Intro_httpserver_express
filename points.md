# Intro to Http server and Express:

1. Any computer program that we execute in our computer, becomes a process. Now if any external calls/environment, needs to communicate to a process. Every process will be communicated via a port number.
   Any process is uniquely identified via a port number, we need to bind the server object with a port.

2. Analology to understand server -
   Server is a bank
   And any bank functionality/features i.e atm etc..., all these functionalities/features are similar to API's.
   We write many API's in a server
   Whenever we want a http request to connect to a API, we set up a HTTP server.

3. `127.0.0.1` -> It is the standard address for IPV4 loopback traffic.
   It is the loopback Internet protocol(IP) address also referred to as the "localhost".
   This address is used to establish an IP connection to the same machine or computer being used by the end-user,
   127.0.0.1:3000, to listen to request on our machine on localhost.
   It is similar to localhost:3000.
   localhost is not in the internet. Not necessary to be connected to internet to access localhost.
   `localhost:3000` - This is also known as the socket address.

4. When we access server on local host, it means that on our machine, our browser is acting as a client and node js process acts as a server. And since a client needs an IP to communicate with the server, so we give IP address 127.0.0.1 on our browser to communicate with our server.
   If we give `curl http://localhost:3000`, on our termina, then our terminal starts acting as a client and communicate with our server on other terminal.

5. `postman` -> Postman is the gui interface of, what we do using curl commands in the terminal

6. `fetch` -> fetch is a replacement of, XML HTTP request.

7. `express.js` -> used for setting up servers in node. There are other packages also available for purpose of setting up servers in node.

8. `npx` -> stands for node package execute. It is simply an NPM package runner. It allows developers to execute any javascript package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.
   ex. to run nodemon do -> npx nodemon index.js
