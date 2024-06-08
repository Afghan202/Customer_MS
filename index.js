import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config()
import bodyParser from "body-parser";
import router from "./routes/userRoute.js";

const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT ||5000;
const DBconnect=process.env.MONGODB_URL;

app.use("/api",router);

mongoose.connect(DBconnect)
.then(()=>{
   console.log("DB connected successfully");
   app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
   })
})
.catch((error)=>
    console.log(error));

