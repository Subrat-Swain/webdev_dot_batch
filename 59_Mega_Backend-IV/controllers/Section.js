const Section = require("../models/Section");
const Course = require("../models/Course");


exports.createSection = async(req, res) => {
    try{
        // data fetch
        const {sectionName, courseId} = req.body;
        // data validation
        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:`All Fields Are Required`,
            })
        }
        // create Section
        const newSection = await Section.create({sectionName});
        // update Course with Section objectId
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,
            {
                $push:{
                    courseContent:newSection._id,
                }
            },
            {new:true},
        )
        // HW: Use populte to replace sections and sub-section to the updatedCourseDetails
        // return a successfull response
        return res.status(200).json({
            success:true,
            message:`Section Created Successfully`,
            updatedCourseDetails,
        });

    }catch(error){
        console.log("Error While Creating Section", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}

exports.updateSection = async(req, res) => {
    try{
        // fetch data
        const {sectionName, sectionId} = req.body;
        // validation
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:`All Fields Are Required`,
            });
        }
        // update data in DB
        const section = await Section.findByIdAndUpdate(sectionId, {sectionName}, {new:true});
        // return successfull response
        return res.status(200).json({
            success:true,
            message:`Section Updated Successfully`,
            section,
        })
    }catch(error){
        console.log("Error While Updating Section", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })

    }
}


exports.deleteSection = async(req, res) => {
    try{
        // get id - assuming that we are sending ID in params
        const {sectionId} = req.params;
        // validation
        // findByIdAndDelete
        await Section.findByIdAndDelete(sectionId);
        // ToDo[Testing] : Do we need to delete the entry from the Course Schema
        // return successfull response
        return res.status(200).json({
            success:true,
            message:`Section Deleted Successfully`,
        })
    }catch(error){
        console.log("Error While Deleting Section", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}