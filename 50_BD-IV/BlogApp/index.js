const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

//import routes
const blog = require("./routes/blog");

// Mount routes
app.use("/api/v1", blog);

// DB Connection
const connectWithDb = require("./config/database");
// call 
connectWithDb();

// start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage Baby</h1>`);
});


