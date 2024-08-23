const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.Db_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB Conected Successfully"))
    .catch( (error) => {
        console.log("Db Connection Issue!!!!");
        console.log(error);
        process.exit(1);
    })
};
 
module.exports = connectWithDb;