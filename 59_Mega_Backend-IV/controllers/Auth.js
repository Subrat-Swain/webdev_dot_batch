const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//sendOTP
exports.sendOTP = async(req, res) => {
    
    try{
        //fetch email from request body
        const {email} = req.body;
    
        // check if user already exist
        const checkUserPresent = await User.findOne({email});
    
        // if email already exist then return a response
        if(checkUserPresent){
            return res.status(401).json({
                success:false,
                message:"User already Registered",
            })
        }
    
        // generate otp
        var otp = otpGenerator.generate(6, {
            uppperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        console.log("OTP Generated: ", otp);

        // check for unique otp or not
        let result = await OTP.findOne({otp: otp});
        // bruteforce method for checking unique otp avoid it as we check DB many times
        // try a package for generate cumpolsory unique otp 
        while(result){
            otp = otpGenerator.generate(6, {
                uppperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp: otp});
        }

        // Assemble OTP data
        const otpPayload = {email, otp};
        // create an entry for OTP
        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        // return response successfully
        res.status(200).json({
            success:true,
            message:"OTP Sent Successfully",
            otp,
        })


    }catch(error){
        console.log("Error while sending OTP", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//signUp
exports.signUp = async(req, res) => {

    try{
        // data fetch from req.body
        const {
            firstName, 
            lastName, 
            email, 
            password, 
            confirmPassword, 
            accountType, 
            contactNumber, 
            otp
        } = req.body;
    
        // validate
        if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            })
        }
    
        // match 2 password (password, confirm password)
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:`Password and ConfirmPassword value does not match, please try again`
            });
        };
    
        // check for already exist or not
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User is already registered"
            })
        };
    
        // find most recent OTP stored for the user in DB
        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        console.log(recentOtp);
    
        // validate OTP(match)
        if(recentOtp.length == 0){
            // Otp not found
            return res.status(400).json({
                success:false,
                message:`OTP Not Found`,
            })
        } else if(otp !== recentOtp.otp){
            //Invalid OTP
            return res.statu(400).json({
                success:false,
                message:"Invalid OTP"
            })
        }
    
        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // creat an entry in Db of AdditonalDetails with null in Profile object to get ObjectId then add it to User
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null,
        })
    
        // create entry in DB and use dicebear api for generating default Profile Picture
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`,
        })
        // return response
        return res.status(200).json({
            success:true,
            message:"User is Registered Successfully",
            user,
        });

    }catch(error){
        console.log("Error While SignUp", error);
        return res.status(500).json({
            success:false,
            message:"User Cannot be registered. Please try again",
        })
    }
}

//login
exports.login = async (req, res) => {
    try{
        // get data from req.body
        const {email, password} = req.body;

        // validation
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required, Please Try Again"
            });
        }

        // user exist or not
        const user = await User.findOne({email}).populate("additionalDetails");
        //user not exist
        if(!user){
            return res.status(401).json({
                success:false,
                messsage:"User is not registered, Please SignUp First",
            })
        }

        // generate JWT after matching password
        if(await bcrypt.compare(password, user.password)){
            const payload = {
                email:user.email,
                id:user._id,
                accountType:user.accountType,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"2h",
            })
            user.token = token;
            user.password = undefined;
            // create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3*24*60*1000),
            }
            res.cookie("token", token, options).status(200).jon({
                success:true,
                token,
                user,
                message:"logged in successfully",
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is Incorrect"
            })
        }

    }catch(error){
        console.log("Error while SingingIn", error);
        return res.status(500).json({
            success:false,
            message:"login Failure, please try again"
        });
    }
}

//changePassword
exports.changePassword = async(req, res) => {
    // get data from req.body
    // get oldPassword, newPassword, confirmNewPassword
    // validation
    // update password in DB
    // send main - Password Updated
    // return response
}