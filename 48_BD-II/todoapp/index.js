const express = require("express");
const app = express();


// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;


// Middleware to parse json request body
app.use(express.json());


// import routes for TODO API
const todoRoutes = require("./routes/todos");
// mount the todo API routes
app.use("/api/v1", todoRoutes);


// Start Server
app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`);
})


// DB Connection
const dbConnect = require("./config/database");
dbConnect();


//default Route
app.get("/", (req, res) => {
    res.send("<h1>This is HomePage body</h1>");
})