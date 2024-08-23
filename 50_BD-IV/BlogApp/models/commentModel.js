// Import mongoose
const mongoose = require("mongoose");

// route handler
const commmentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});

// export
module.exports = mongoose.model("Comment", commmentSchema);