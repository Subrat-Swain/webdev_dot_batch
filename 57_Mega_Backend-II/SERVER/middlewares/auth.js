const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

// auth
exports.auth = async(req, res, next) => {
    try{
        // fetch token
        const token = req.cookies.token || 
                        req.body.token ||
                        req.header("Authorization").replace("Bearer ", "");

        // return a response if token missing
        if(!token){
            return res.status(401).json({
                success:false,
                message:`Token is Missing`,
            });
        }

        // verify token
        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }catch(error){
            console.log("Error While Verifying token", error);
            res.status(401).json({
                success:false,
                message:`Token is Invalid`,
            });
        }
        next();
    }catch(error){
        console.log("Authentication Failed", error);
        return res.status(500).json({
            success:false,
            message:`Authentication Failed`,
        });
    }
}

// isStudent
exports.isStudent = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Sudent"){
            return res.status(401).json({
                success:false,
                message:`This Is a Protected Route For Student`,
            });
        }
        next();
    }catch(error){
        console.log("Error While Verifying Role", error);
        return res.status(500).json({
            success:false,
            message:`User Role Cannot Be Verified, Please Try Again`,
        });
    }
}

// isInstructor
exports.isInstructor = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:`This is Portected Route For Instructor`,
            });
        }
        next();
    }catch(error){  
        console.log("Error While Verifying Role", error);
        return res.status(500).json({
            success:false,
            message:`User Role Cannot Be Verified, Please Try Again`,
        });
    }
}

// isAdmin
exports.isAdmin = async(req, res, next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:`This is a Portected Route For Admin Only`,
            });
        }
        next();
    }catch(error){
        console.log("Error While Verifying User role", error);
        return res.status(500).json({
            success:false,
            message:`User Role Cannot Be Verified, Please Try Again`,
        });
    }
}