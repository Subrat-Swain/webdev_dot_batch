const Todo = require("../models/Todo");

// Define route handler

exports.getTodo = async(req, res) => {
    try{
        // Fetch all Todos
        const todos = await Todo.find({})

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entiree Todo Data is Fetched",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message:"Server Error",
        });
    }
}

// Another controller for fetching Todo by Id
exports.getTodoById = async(req, res) => {
    try{
        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // data for given id not found
        if(!todo){
            return res.status(200).json({
                success: false, 
                message: "No Data Found with given id"
            });
        }
        //data for given id Found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
}