const mongoose = require("mongoose");

require("dotenv").config();

const dbUrl = process.env.MONGODB_URL;

exports.dbConnect = () => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("DB Connected Successfully")})
    .catch((err) => {
        console.log("DB Connection Issue");
        console.error(err);
        process.exit(1);
    })
}