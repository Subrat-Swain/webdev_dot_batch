const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");


//resetPasswordToken
exports.resetPasswordToken = async(req, res) => {
    try{
        // get email from req.body
        const email = req.body.email;
        // check email for user exist
        const user = await User.findOne({email:email});
        if(!user){
            return res.json({
                success:false,
                message:`Your Email is not registered with us`
            })
        }
        // generate token with expiration time
        const token = crypto.randomUUID();
        // update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate(
                                            {email:email},
                                            {
                                                token:token,
                                                resetPasswordExpires:Date.now() + 5*60*1000,
                                            },
                                            {new:true});
        // link generate
        const url = `http://localhost:3000/update-password/${token}`;
        // send mail containing Url
        await mailSender(email, 
                        "Password Reset Link",
                        `Password Reset Link: ${url}`);
        // return response
        return res.json({
            success:true,
            message:`Email Sent successfully, Please Check email`,
        })
    }catch(error){
        console.log("Failed while sending mail with reset password url", error);
        return res.status(500).json({
            success:false,
            message:`Something Went Wrong while sending reset password url`
        })
    }

}


//resetPassword
exports.resetPassword = async(req, res) => {
    try{
        // fetch token, password, confirm pass
        const {password, confirmPassword, token} = req.body;
        // pass validation (matching of pwd and confirm pwd)
        if(password !== confirmPassword){
            return res.json({
                success:false,
                message:`Password not matching`,
            });
        }
        // get userDetails from Db using token
        const userDetails = await User.findOne({token:token});
        // if no entry - invalid token
        if(!userDetails){
            return res.json({
                success:false,
                message:`Token is Invalid`,
            })
        }
        // check for token time expires
        if(userDetails.resetPasswordExpires < Date.now()){
            return res.json({
                success:false,
                message:`Token is expired, Please regenerate your token`,
            })
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // update password
        await User.findOneAndUpdate(
                        {token:token},
                        {password:hashedPassword},
                        {new:true},
        );
        // return response
        return res.status(200).json({
            success:true,
            message:`Password reset Successfully`,
        })
    }catch(error){
        console.log("Error While Reseting Password", error);
        return res.status(500).json({
            success:false,
            message:`Password Rest Failed`,
        })
    }
}