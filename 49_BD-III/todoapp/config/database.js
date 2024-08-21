const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.Database_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    })
    .then(() => {console.log("DB Connection Successfull")})
    .catch((error) => {
        console.log("Issue In DB Connection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;