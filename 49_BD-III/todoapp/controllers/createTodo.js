// import schema from model
const todo = require("../models/Todo");

// define router handler
exports.createTodo = async(req,res) => {
    try{
        // extreact title and description from request Body
        const {title,description} = req.body;
        //createa new Todo obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success : true,
                data : response,
                message : 'Entry Created Successfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success : false,
            data : "Internal Server Error",
            message : err.message,
        })
    }
}

