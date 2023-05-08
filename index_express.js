const express = require('express');
// express is a function, we call this function and create a express server object called app.
const app = express();

const mylogger = (req,res,next) => {
    console.log('Logging from middleware 1 ');
    //return res.json({msg: 'done'}); // if return response is used , then here we terminate the request-response cycle and function terminates and never reaches to next function
    next(); // calls the next middleware
}

const extLogger = (req,res,next) => {
    console.log('logging from middleware 2');
    next();
}

const PORT = 3000;

app.get('/', mylogger, extLogger, (request,response) => { // this request - response function is technncally a middleware
    return response.send("Hello World");
});

const middlewares= [mylogger,extLogger];

app.get('/home', middlewares, (request,response) => { // request first goes to mylogger and then to extlogger and then to last middleware, it can also be used as an array
    //response.send("Welcome to get");
    console.log("last middleware");
    return response.json({ // we should always use return statement as res.json is an asynchronous operation and it might cause some issue, if return is not written.
        message: "GET"
    })
});

app.post('/home', (request,response) => {
    //response.send('Welcome to post');
    return response.json({
        message : "POST"
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});