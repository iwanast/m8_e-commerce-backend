const asyncHandler = require("express-async-handler");

const Apt = require("../models/aptModel");

const getAllApt = asyncHandler(async (req, res) => {
    const apts = await Apt.find();
    console.log(await Apt.find())

    res.status(200).json(apts)
})

module.exports = {
    getAllApt,
}