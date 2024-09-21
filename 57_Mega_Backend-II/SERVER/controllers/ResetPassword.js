const { response } = require("express");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");



// ResetPassword Token
exports.resetPasswordToken = async(req, res) => {
    try{
        // get email from req.body
        const email = req.body.email;
        // check email for user exist
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                success:false,
                message:`Your Email is Not Registered with us`,
            });
        };

        // generate token with expiration timee
        const token = crypto.randomUUID();
        // updat user by adding token and epiration time
        const updateDetails = await User.findOneAndUpdate({email:email},{
            token:token,
            resetPasswordExpires:Date.now() + 5*60*1000
        },{new:true});

        // link generate
        const url = `http://localhost:3000/update-password/${token}`;

        // send mail containing url

        await mailSender(email, "Password Reset Link", `Reset Password Url:${url}`);

        return res.status(200).json({
            success:true,
            message:`Email Sent Successfully, Please Check Email`,
        });


    }catch(error){
        console.log("Error While Sending mail ResetPassword Url", error);
        return res.status(500).json({
            success:false,
            message:`Something Went Wrong While Sending ResetPassword url`,
        });
    }
}

// ResetPassword
exports.resetPassword = async(req, res) => {
    try{
        // fetch token, password, confirmPassword
        const {password, confirmPassword, token} = req.body;
        // validate two password
        if(password !== confirmPassword){
            return res.json({
                success:false,
                message:`Password Not Matching`,
            });
        };
        // get userDetails from DB using token
        const userDetails = await User.findOne({token:token});
        if(!userDetails){
            return res.json({
                success:false,
                message:`Token is Invalid`,
            });
        };

        // check for token time expires
        if(userDetails.resetPasswordExpires < Date.now()){
            return res.json({
                success:false,
                message:`Token Expired, Please Regenerate Your Token`,
            });
        }

        // hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        // update Password
        await User.findOneAndUpdate({token:token},{password:hashedPassword},{new:true});
        // return response
        return res.status(200).json({
            success:true,
            message:`Password reset Successfully`,
        });

    }catch(error){
        console.log("Error While Reseting Password", error);
        return res.status(500).json({
            success:false,
            message:`Password Reset Failed`,
        });
    }   
}