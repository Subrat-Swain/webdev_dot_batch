const express = require("express");
const app = express();

// Load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Middleware to Parse json request body
app.use(express.json());


// import routes for Todo API
const todoRoutes = require("./routes/todo");

// Mount the todo api routes
app.use("/api/v1", todoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
})

// DB Connection
const dbConnect = require("./config/database");
dbConnect();

// Default Route
app.get("/", (req, res) => {
    res.send("<h1>This is Home Page Body</h1>")
})