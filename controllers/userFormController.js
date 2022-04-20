const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// WHENEVER YOU HAVE UserForm."SOMETHING"
// THAT CALLS A MONGOOSE FUNCTION
const UserForm = require("../models/userFormModel");

// @desc       Register new user
// @route       POST /users
// @access      Public
const registerUser = async (req, res) => {
    // DECONSTRUCTING THE REQUEST BODY
    const { username, email, password } = req.body;

    console.log(req.body)

    // IF ONE OF THESE FIELD ARE MISSING
    // STOP THE CODE (ERROR)
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("YOU MISSED A FIELD")
    }

    // SEE IF USER ALREADY HAS AN ACCOUNT
    const userExists = await UserForm.findOne({email})
    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // HASHING PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATING THE USER
    const user = await UserForm.create({
        username,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            //WHERE DOES generateToken
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("INVALID USER DATA");
    }

    res.json({message: "User registerd!"});


}

// GENERATE TOKEN
const generateToken = (id) => {
    // THIS MIGHT CAUSE A BUG??
    return jwt.sign( { id } , process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

module.exports = {
    registerUser
}