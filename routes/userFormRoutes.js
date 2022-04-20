const express = require("express");
const router = express.Router();
const {
    registerUser,
    //loginUser,
    getMe
} = require("../controllers/userFormController");
//const {protect} = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
//router.route("/login").post(loginUser);
//router.route("/").get(getMe);

module.exports = router;