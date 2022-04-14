const express = require("express");
const router = express.Router();
const {
    getAllApt,
} = require("../controllers/aptController")

router.route("/").get(getAllApt)

module.exports = router;