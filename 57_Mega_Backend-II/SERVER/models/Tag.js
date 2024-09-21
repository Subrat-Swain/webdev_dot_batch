const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    tagName:{
        type:String,
        required:true,
    },
    tagDescription:{
        type:String,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
})