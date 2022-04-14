const express = require("express");
//import mongodb from "mongodb";
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000
const connectDB = require("./config/db")

connectDB();

/*const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT
const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();*/


/*const dataBase = mongoClient.db("m8-e-commerce");
const colApartment = dataBase.collection("apartments");*/


const app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use("/apartments", require("./routes/aptRoutes"));

app.listen(port, () => console.log(`m8-e-commerce is running @ http://localhost:${port}`))

/*app.get("/apartment", async (req, res) =>{
  try{
    const apartments = await colApartment.find({}).toArray();
    return res.json(apartments).end()
  } catch(error){
    console.log("Something went wrong when loading the apartments, bear with us");
    res.sendStatus(500)
  }
})*/





