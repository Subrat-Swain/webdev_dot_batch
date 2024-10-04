const Course = require("../models/Course");
const Tag = require("../models/Tag");
const User = require("../models/User");
const {uploadImageToCloudinary} = require("../utils/imageUploader");

// create Course
exports.createCourse = async(req, res) => {
    try{
        // fetch data from req.body
        const {courseName, courseDescription, whatYouWillLearn, price, tag} = req.body;

        // get thumbnail
        const thumbnail = req.files.thumbnailImage;

        // validation
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail){
            return res.status(400).json({
                success:false,
                message:`All Fields are required`,
            });
        }

        // check for Instructor
        const userId = req.user.Id;
        const InstructorDetails = await User.findById(userId);
        console.log("Instructor Details", InstructorDetails);

        if(!InstructorDetails){
            return res.status(404).json({
                success:false,
                message:`Instructor Details Not Found`,
            });
        }

        // Check Given Tag is Valid Or Not
        const tagDetails = await Tag.findById(tag);
        if(!tagDetails){
            return res.status(404).json({
                success:false,
                message:`Tag Details Not Found`,
            });
        }

        // Upload Image to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create an entry for new Course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor:InstructorDetails._id,
            whatYouWillLearn:whatYouWillLearn,
            tag:tagDetails._id,
            thumbnail:thumbnailImage.secure_url,
        });

        // Update User
        await User.findByIdAndUpdate(
            {_id:InstructorDetails._id},
            {
                $push:{
                    courses: newCourse._id,
                }
            },
            {new:true}
        )

        // Update The TagSchema

        // return response
        return res.status(200).json({
            success:true,
            message:`Course Created Successfully`,
            data:newCourse,
        });
        
    }catch(error){
        console.log("Error While Creating Course", error);
        return res.status(500).json({
            success:false,
            message:`Failed to Create Course`,
            error: error.message,
        });
    }
}


// getAllCourse
exports.showAllCourse = async(req, res) => {
    try{
        const allCourse = await Course.find({}, {
            courseName:true,
            price:true,
            thumbnail:true,
            instructor:true,
            ratingAndReviews:true,
            studentEnrolled:true,
        }).populate("instructor").exec();

        return res.status(200).json({
            success:true,
            message:`Data for All Courses Fetched Successfully`,
            data:allCourse,
        })
    }catch(error){
        console.log("Error While Showing All Course", error);
        return res.status(500).json({
            success:false,
            message:`Cannot Fetch Course Data`,
            error:error.message,
        });
    }
}
