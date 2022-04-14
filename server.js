const express = require("express");
//import mongodb from "mongodb";
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000
const connectDB = require("./config/db")

connectDB();

const app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use("/apartments", require("./routes/aptRoutes"));

app.listen(port, () => console.log(`m8-e-commerce is running @ http://localhost:${port}`))




