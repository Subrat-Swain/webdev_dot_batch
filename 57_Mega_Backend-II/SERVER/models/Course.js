const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
    },
    courseDescription:{
        type:String,
        required:true,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    whatYouWillLearn:{
        type:String,
        required:true,
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section",
        }
    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratingAndReviews",
        }
    ],
    price:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    tag:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tag",
            required:true,
        }
    ],
    studentEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        }
    ],
    language:{
        type:String, 
    }

});

module.exports = mongoose.model("Course", courseSchema);
