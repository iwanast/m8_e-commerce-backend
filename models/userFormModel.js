const mongoose = require("mongoose");

const userFormSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Something wrong with username"]
    },
    email: {
        type: String,
        required: [true, "Something wrong with email"]
    },
    password: {
        type: String,
        required: [true, "Something wrong with password"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("users", userFormSchema)