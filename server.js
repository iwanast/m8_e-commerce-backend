const express = require("express");
//import mongodb from "mongodb";
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000
const connectDB = require("./config/db")

//CONNECTION TO THE DATABASE
connectDB();

const app = express();

//THIS ALLOWS LOCALHOST 3000 TO USE BACKEND
app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.static("./public"));

app.use(express.urlencoded({extended: false}));

// localhost:5000/"first"
app.use("/apartments", require("./routes/aptRoutes"));
app.use("/users", require("./routes/userFormRoutes"));


app.listen(port, () => console.log(`m8-e-commerce is running @ http://localhost:${port}`))




