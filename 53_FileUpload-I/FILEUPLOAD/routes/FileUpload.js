const express = require("express");
const router = express.Router();

const {localFileUpload} = require("../controllers/fileUpload");

// api route
// router.post("/imageUpload", imageUpload);
// router.post("/videoUpload", videoUpload);
// router.post("/imageReduceUpload", imageReducerUpload);
router.post("/localFileUpload", localFileUpload);


module.exports = router;