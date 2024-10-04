const Tag = require("../models/Tag");

// create Tag
exports.createTag = async(req, res) => {
    try{
        const {name, description} = req.body;

        // validation
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:`All Fields are required`,
            });
        };

        // create entry in DB
        const tagDetails = await Tag.create({
            name:name,
            description:description,
        });
        console.log(tagDetails);
        // return response
        return res.status(200).json({
            success:true,
            message:`Tag Created Successfully`,

        })
    }catch(error){
        console.log("Error While Adding Tag", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });

    }
}

// get all tags
exports.showAllTags = async(req, res) => {
    try{
        //fetch all tags
        const allTags = await Tag.find({name:true},{description:true});
        //return a response
        return res.status(200).json({
            success:true,
            message:`All tags returned Successfully`,
            allTags,
        });
    }catch(error){
        console.log("Error While Showing All Tags", error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}