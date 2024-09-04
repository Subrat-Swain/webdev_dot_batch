const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

// localfileuplaod -> handler function
exports.localFileUpload = async (req, res) => {
    try{
        // Fetch File from req
        const file = req.files.file;
        console.log("FILE :- ",file);

        // create path where file need to be store on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH ->",path)

        // add path to the move function
        file.mv(path, (error) => {
            console.log(error);
        }) ;
        // create a successful response
        res.json({
            success: true,
            message: "local File Uploaded Successfully",
        })
    }catch(error){
        console.log(error);
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder};

    if(quality){
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload handler
exports.imageUpload = async(req, res) => {
    try{
        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        // validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File Fomat not Supported"
            });
        }

        // file format supported upload to cloudinary
        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log(response);

        // save a entry in db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully uploaded"
        })


    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message: "Something Went wrong"
        })
    }
}

// video upload handler
exports.videoUpload = async(req, res) => {
    try{
        // data fetch
        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;

        // validation
        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("FileType:-",fileType);

        // Add a upper limit of <5MB
        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File Format Not Supported",
            });
        }

        //file format supported
        console.log("Uploading to codehelp");
        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log(response);

        // Make an entry on db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })


        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "video Successfully uploaded"
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Something Went wrong"
        })
    }
}

// image reduce upload
exports.imageReducerUpload = async(req, res) => {
    try{
        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        // validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File Fomat not Supported"
            });
        }

        // file format supported upload to cloudinary
        const response = await uploadFileToCloudinary(file, "codehelp", 30);
        console.log(response);

        // save a entry in db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully uploaded"
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Something Went wrong"
        })
    }
}