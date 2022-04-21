const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// WHENEVER YOU HAVE UserForm."SOMETHING"
// THAT CALLS A MONGOOSE FUNCTION
const UserForm = require("../models/userFormModel");
const { getMaxListeners } = require("../models/userFormModel");

// @desc       Register new user
// @route       POST /users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
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
    const userNameExists = await UserForm.findOne({username})
    const emailExists = await UserForm.findOne({email})
    if(userNameExists || emailExists) {
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


})

// @desc       Login user
// @route       POST /users/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
    // DECONSTRUCTING THE REQ BODY
    const {username, password} = req.body;
    console.log(req.body)

    // SEEING IF THE USER EXISTS BASED ON USERNAME
    let user;
    try {
        user = await UserForm.findOne({username});
    } catch (error) {
        console.log(error);
    }

    // COMPARE PASSWORD AND SEE IF IT IS CORRECT
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            username: user.username,
            // FOR THE FUTURE ADD APARTMENTS
            // ALSO WALLET
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid login")
    }

})

// GENERATE TOKEN
const generateToken = (id) => {
    // THIS MIGHT CAUSE A BUG??
    return jwt.sign( { id } , process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

module.exports = {
    registerUser,
    loginUser
}