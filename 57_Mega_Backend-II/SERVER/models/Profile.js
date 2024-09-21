const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
    },
    dateOfBirth:{
        type:String,
    },
    about:{
        type:String,
        trim:true,
    },
    phoneNumber:{
        type:String,
    },
});

modulde.exports = mongoose.model("Profile", profileSchema);