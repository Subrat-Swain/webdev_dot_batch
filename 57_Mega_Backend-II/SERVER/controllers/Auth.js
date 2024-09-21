const User = require("../models/User");
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




// sendOtp
exports.sendOTP = async(req, res) => {
    try{
        // Fetch Email from req.body
        const {email} = req.body;
        // check if user already exist
        const checkUserPresent = await User.findOne({email});
        // If emaill already exist then return a response
        if(checkUserPresent){
            return res.status(401).json({
                success:false,
                message:`User already registered`,
            });
        };
        // generate OTP
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        // check for Unique OTP in DB 
        /*Try a Package/Service for generating guaranteed unique OTP so that we don't have 
            to iterate through whole DB Documents/collection */
        let result = await OTP.findOne({otp:otp});
        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp:otp});
        };
        // Assemble OTP data
        const otpPayload = {email, otp};
        // create an entry for OTP
        const otpBody = await OTP.create(otpPayload);
        // return a successfull response
        res.status(200).json({
            success:true,
            message:`OTP Sent Successfully`,
        });
    }catch(error){
        console.log("Error While Sending OTP", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}


// signUP
exports.signUp = async(req, res) => {
    try{
        // extract data from req.body
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
        } = req.body;

        // validation
        if(!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !contactNumber || !otp){
            return res.status(403).json({
                success:false,
                message:`All Fields Are required`,
            });
        };

        // match 2 password (password, confirmPassword)
        if(password !== confirmPassword){
            return res.status(403).json({
                success:false,
                message:`Password and ConfirmPassword did not match, Please Try Again`,
            });
        };

        // check for already exist or not
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:`User is Already Registered`,
            });
        };

        // find Most recent OTP Stored For the User in DB as We generating otp multiple Times for unique otp
        const recentOTP = await OTP.findOne({email}).sort({createdAt:-1}).limit(1);

        // validate OTP
        if(recentOTP.length == 0){
            return res.status(400).json({
                success:false,
                message:`OTP Not Found`,
            });
        }else if(otp !== recentOTP.otp){
            //Invalid OTP
            return res.status(400).json({
                success:false,
                message:`Invalid OTP`,
            });
        };

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create an entry in DB with additionalDetails(Profile) null then add it to the user to get objectId
        
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null,
        });

        // adding profileDetails into User and create a entry in DB of that user
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails,
            image:`https://api.dicebear.com/9.x/initials/svg?seed=${firstName},${lastName}`,
        });

        return res.status(200).json({
            success:true,
            message:`User is Registered Successfully`,
            user,
        });
    }catch(error){
        console.log("Error While SingingUp", error);
        return res.status(500).json({
            success:false,
            message:`User Cannot be registered, Please Try Again`,
        });
    }
}

// login
exports.logIn = async(req, res) => {
    try{
        // extract data from req.body
        const {email, password} = req.body;
        // validation
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:`All Fields are required, Please Try Again`,
            });
        };
        // check user exist or Not
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:`User is Not Registered SignUp First`,
            });
        };

        // Generate JWT after matching the password
        if(await bcrypt.compare(password, user.password)){
            const payload = {
                email: user.email,
                id: user._id,
                accountType:user.accountType,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:"2h"});
            user.token = token;
            user.password = undefined;
            // create a cookie and send response with that cookie
            const option = {
                expires:new Date(Date.now() + 3 * 24 * 60 * 1000)
            }

            res.cookies("token", token, option).status(200).json({
                success:true,
                message:`Logged in successfull`,
                token,
                user,
            });
        }
        else{
            return res.status(401).json({
                success:false,
                message:`Password is Incorrect`
            });
        }
    }catch(error){
        console.log("Error While Signing in", error);
        return res.status(500).json({
            success:false,
            message:`Log in Failure, Please Try Again`,
        });
    };
}


// ChangePassword 
exports.changePassword = async(req, res) => {
    try{
        // get data from req.body(oldPassword, newPassword, cofirmPassword)
        // validation
        // updatePassword in DB
        // Send mail password update
        // return response
    }catch(error){

    }
}