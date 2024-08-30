const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

// Protected Routes:-

// testig route
router.get("/test", auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Protected route for Testing"
    })
})
// student route
router.get("/student", auth, isStudent, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Protected router for Student"
    })
});
// admin route
router.get("/admin", auth, isAdmin, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Protected route for Admin"
    })
});

// router.get("/getEmail", auth, (req, res) => {
//     const id = req.user.id;
//     console.log("ID:", id);
// })

module.exports = router;