import express from "express";
import mongouri  from "./constant.js";
import mongoose from "mongoose";
import router from "./coolieroute.js";
import { connectdb } from "./mongodb.js";
const app=express();
import cors from 'cors';


app.use(express.json());
app.use(cors());
app.use("/user",router);
app.listen(2000,()=>{
    console.log("server started");
})
connectdb();