const express = require('express');
// express is a function, we call this function and create a express server object called app.
const app = express();

const PORT = 3000;

app.get('/',(request,response) => {
    response.send("Hello World");
});

app.get('/home',(request,response) => {
    //response.send("Welcome to get");
    response.json({
        message: "GET"
    })
});

app.post('/home', (request,response) => {
    //response.send('Welcome to post');
    response.json({
        message : "POST"
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});