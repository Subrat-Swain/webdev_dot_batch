const mongoose = require("mongoose");

// import or feeding dotenv to config environment variable like Port no DB url
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( () => console.log("DB Connection Successful"))
    .catch( (error) => {
        console.log("Issue In DB Connection");
        console.error(error.meesage);
        process.exit(1);
    })
}

// export
module.exports = dbConnect;
