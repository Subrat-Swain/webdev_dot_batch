const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
});

// function to send email
async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email, "Verification Email From StudyNotion", otp);
        console.log("Email Sent Successfully", mailResponse);
    }catch(error){
        console.log("Error occured While Sending Mail", error);
        console.log(error.message);
    }
}


// Pre Middlewares
otpSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp);
    next();
})

module.exports = mongoose.model("OTP", otpSchema);