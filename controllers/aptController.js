// WHY ARE WE USING ASYNCHANDLER?
const asyncHandler = require("express-async-handler");

const Apt = require("../models/aptModel");

// @desc       GET ALL APARTMENTS
// @route       GET 
// @access      Private
const getAllApt = asyncHandler(async (req, res) => {
    const apts = await Apt.find();
    //console.log(await Apt.find())

    res.status(200).json(apts)
})

// @desc       Update apartment
// @route       PUT /apartments/:id
// @access      Private
const getApt = asyncHandler(async (req, res) => {
    const apartment = await Apt.findById(req.params.id);
    if(!apartment) {
        res.status(400);
        throw new Error("Apartment not found");
    }
    
    res.status(200).json(apartment);
})

// @desc       Update apartment
// @route       PUT /apartments/:id
// @access      Private
const updateApt = asyncHandler(async (req,res) => {
    const apartment = await Apt.findById(req.params.id);

    if(!apartment) {
        res.status(400);
        throw new Error("apartment not found");
    }

    const updatedApartment = await Apt.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedApartment);
})


module.exports = {
    getAllApt,
    updateApt,
    getApt
}