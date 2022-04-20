const express = require("express");
const router = express.Router();
const {
    getAllApt,
} = require("../controllers/aptController")

// "/" is going to be /apartments (based on server.js)
router.route("/").get(getAllApt)
// EXAMPLE
// router.route("/:id").delete(deleteApt).patch(editApt)
// ^DOEST NOT RUN ALL ROUTES ONLY THE SPECIFIED ONES 
module.exports = router;