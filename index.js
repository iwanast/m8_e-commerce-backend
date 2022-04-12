import express from "express";
import mongodb from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT
const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();
const dataBase = mongoClient.db("m8-e-commerce");
const colApartment = dataBase.collection("apartments");


const app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

app.get("/apartment", async (req, res) =>{
  try{
    const apartments = await colApartment.find({}).toArray();
    return res.json(apartments).end()
  } catch(error){
    console.log("Something went wrong when loading the apartments, bear with us");
    res.sendStatus(500)
  }
})




app.listen(PORT, () => console.log(`m8-e-commerce is running @ http://localhost:${PORT}`))
