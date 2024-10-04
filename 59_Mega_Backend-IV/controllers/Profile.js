const Profile = require("../models/Profile");
const User = require("../models/User");

exports.updateProfile = async(req, res) => {
    try{
        // get data
        const {dateOfBirth="", about="", contactNumber, gender} = req.body;
        // get userId
        const id = req.user.id;
        // validation
        if(!contactNumber || !gender || !id){
            return res.status(400).json({
                success:false,
                message:`All Fields Are required`,
            });
        }
        // find Profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        // update Profile
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;
        await profileDetails.save();
        // return a successfull response
        return response.status(200).json({
            success:true,
            message:`Profile Updated Successfully`,
            profileDetails,
        });
    }catch(error){
        console.log("Error While Updating Profile", error);
        return res.status(500).json({
            success:false,
            message:`Error Occured While Updating Profile`,
            error:error.message,
        });
    }
}

// delete Account
exports.deleteAccount = async(req, res) => {
    try{
        // get id
        const id = req.user.id;
        // validation
        const userDetails = await User.findById(id);
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:`User Not Found`,
            });
        }
        // Delete Profile or additional details
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
        // TODO HW: delete unrolled user from Course,
        // Delete User
        await User.findByIdAndDelete({_id:id});
        // return a successfull response
        return res.status(200).json({
            success:true,
            message:`Profile Deleted Successfull`,
        })
    }catch(error){
        console.log("Error While Deleting Account", error);
        return res.status(500).json({
            success:false,
            message:`Error While Deleting Account`,
            error: error.message,
        })
    }
}


// get all details of user

exports.getAllUserDetails = async(req, res) => {
    try{
        // get id
        const id = req.user.id;
        // validation
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        // get user details
        return res.status(200).json({
            success:true,
            message:`User Data Fetched Successfully`,
        });
        
    }catch(error){
        console.log("Error While Getting All User Details", error);
        return res.status(500).json({
            success:false,
            message:`Error While Fetching User`,
            error:error.message,
        })
    }
}