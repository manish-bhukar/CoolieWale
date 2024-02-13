import express from "express";
import mongouri  from "./constant.js";
import mongoose from "mongoose";
import router from "./coolieroute.js";
import { connectdb } from "./mongodb.js";
import bodyParser from "body-parser";
const app=express();
import cors from 'cors';

app.use(bodyParser.urlencoded({ parameterLimit:100000,limit: '500mb', extended: true }));

app.use(express.json());
app.use(cors());
app.use("/user",router);
app.listen(2000,()=>{
    console.log("server started");
})
connectdb();