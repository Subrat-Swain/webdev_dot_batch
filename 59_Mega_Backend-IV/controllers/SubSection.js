const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const {uploadImageToCloudinary} = require("../utils/imageUploader");


// create subsection
exports.createSubSection = async(req, res) => {
    try{
        // fetch data from req.body
        const {sectionId, title, timeDuration, description} = req.body;
        // extract file/video
        const video = req.files.videoFile;
        // validation
        if(!sectionId || !title || !timeDuration || !description){
            return res.status(400).json({
                success:false,
                message:`All Fields Are Required`,
            });
        }
        // upload video to cloudinary fetch secure url
        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME);
        // create a subsection
        const subSectionDetails = await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadDetails.secure_url,
        })
        // update section with this sub section ObjectId
        const updatedSection = await Section.findByIdAndUpdate({_id:sectionId},{
            $push:{
                subSection:subSectionDetails._id,
            }
        }, {new:true});
        // HW: Log Updated Section Here, after adding populate query
        // return a successful response
        res.status(200).json({
            success:true,
            message:`SubSection Created Successfully`,
            updatedSection,
        })
    }catch(error){
        console.log("Error While Creating SubSection", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });

    }
}

// HW :: updateSubSection
// HW :: deleteSubSection