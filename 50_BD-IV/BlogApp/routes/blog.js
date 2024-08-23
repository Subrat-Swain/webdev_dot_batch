const express = require("express");
const router = express.Router();


// Import Controller
const {dummyController} = require("../controllers/dummyController");
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPost} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeController");
// Mapping routes with controllers
router.get("/dummyroute", dummyController);
router.post("/comment/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// export
module.exports = router;