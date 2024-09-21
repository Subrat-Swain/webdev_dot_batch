const mongoose = require("mongoose");
require("dotenv").config();

// Configure DB Connection Using mongoose instance
const connect = () => {
    mongoose.connect(process.env.MONGODB_URL) // A Promise
    .then( () => {console.log("DB Connection Successfull")})
    .catch( (error) => {console.log("Error In DB Connection", error)}); 
}

module.exports = connect;