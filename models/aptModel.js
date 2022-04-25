const mongoose = require("mongoose");

// THIS IS A SCHEMA FOR POSTING
const aptSchema = mongoose.Schema({
    aptNumber: {
        type: Number,
        required: [true, "no apartment number"]
    },
    aptImage: {
        type: String,
        required: [true, "no image"]
    },
    price: {
        type: Number,
        required: [true, "no price"]
    },
    ownerName: {
        type: String,
        required: [true, "no owner name"]
    },
    tier: {
        type: String,
        required: [true, "no tier description"]
    },
    view: {
        type: String,
        required: [true, "no view description"]
    },
    info: {
        type: String,
        required: [true, "no info set"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("apartments", aptSchema)