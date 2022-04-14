const mongoose = require("mongoose");

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

module.exports = mongoose.model("Apartments", aptSchema)