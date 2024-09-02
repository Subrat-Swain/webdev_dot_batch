const File = require("../models/File");

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