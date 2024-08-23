// import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// like a post
exports.likePost = async(req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post,user
        })
        const savedLike = await like.save();

        // update post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
        .populate("likes").exec();
        res.json({
            post: updatedPost
        });
    }
    catch(error){
        return res.json({
            error: "Error While Liking Post"
        })
    }
}

// unlike a post
exports.unlikePost = async(req, res) => {
    try{
        const {post, like} = req.body;
        // find and Delete from like collection
        const deletedLike = await Like.findByIdAndDelete({post:post, _id:like});

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.json({
            error: "Error while unLiking Post"
        })
    }
}