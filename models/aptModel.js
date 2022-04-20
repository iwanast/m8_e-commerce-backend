const mongoose = require("mongoose");

// THIS IS A SCHEMA FOR POSTING
const aptSchema = mongoose.Schema({
    aptNumber: {
        type: String,
        required: [true, "no apartment number"]
    },
    aptImage: {
        type: String,
        required: [true, "no image"]
    },
    forsale: {
        type: Boolean,
        required: [true, "no for sale value"]
    },
    // CAN CHANGE TO INT?
    price: {
        type: String,
        required: [true, "no price"]
    },
    ownerId: {
        type: String,
        required: [true, "no owner id"]
    },
    ownerName: {
        type: String,
        required: [true, "no owner name"]
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("apartments", aptSchema)