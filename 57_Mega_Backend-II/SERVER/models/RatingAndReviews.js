const mongoose = require("mongoose");

const ratingAndReviewsSchema = new mongoose.model({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    rating:{
        type:Number,
        required:true,
    },
    reviews:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("RatingAndReviews", ratingAndReviewsSchema);