const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");
//auth
exports.auth = async (req, res, next) => {
    try{
        // extract token
        const token = req.cookies.token 
            || req.body.token 
            || req.header("Authorization").replace("Bearer ", "");

        // if token missing, then return response
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing",
            });
        }
        // token verify
        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }catch(error){
            // verification -issue
            console.log("Error while verifying token", error);
            return res.status(401).json({
                success:false,
                message:`token is invalid`,
            })
        }
        next();
    }catch(error){
        console.log("Authorization Failed", error);
        return res.status(401).json({
            success:false,
            message:`Something went wrong while validating the token`,
        });
    }
}


//student
exports.isStudent = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:`This is a protected route for Instructor only`,
            });
        }
        next();
    }catch(error){
        console.log("Error while verifying role", error);
        return res.status(500).json({
            success:false,
            message:`User role cannot be verified, please try again`
        })
    }
}

//instructor
exports.isInstructor = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:`This is a Protected route for Instructor only`,
            });
        }
        next();
    }catch(error){
        console.log("Error while verifying role", error);
        return res.status(500).json({
            success:false,
            message:`User role cannot be verified, please try again`
        })
    }
}

//admin
exports.isAdmin = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:`This is a Protected route for Admin only`,
            })
        }
        next();
    }catch(error){
        console.log("Error while verifying role", error);
        return res.status(500).json({
            success:false,
            message:`User role cannot be verified, please try again`
        })
    }
}