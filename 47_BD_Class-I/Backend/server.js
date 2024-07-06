// Step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder using VS Code
//step5: npm i express
//step6: create server.js


// Server Instantiate
const express = require('express');
const app = express();


//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
// specificallly parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


//activate the server at port 3000
app.listen(3000, () =>{
    console.log("Server Started at port no 3000");
})

// get request :-
// set up home page route and get response the string
app.get('/', (request, response) => {
    response.send("hello Jee, kaise ho saare");
})

// post request :-
app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name)
    console.log(brand);
    response.send("Car Submitted SuccessFully");
})


// use mongoose:- server db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error")});