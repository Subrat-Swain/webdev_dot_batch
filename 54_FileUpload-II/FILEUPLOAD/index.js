// app create
const express = require("express");
const app = express();

// PORT Find
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// add middleware
app.use(express.json());

const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// db connect
const db = require("./config/database");
db.connect();

// cloud connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const upload = require("./routes/FileUpload");
app.use('/api/v1/upload', upload);


// activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})