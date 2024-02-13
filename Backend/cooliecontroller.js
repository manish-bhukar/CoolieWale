import mongoose from "mongoose";
import { Schema } from "./coolieschema.js";
export const cooliecontroller=async(req,res)=>{
    const { name, rating, badgenumber, contactnumber, experience, pic, location } = req.body;

    try {
        if (!name || !rating || !badgenumber || !contactnumber || !experience || !pic || !location) {
            return res.status(400).json({ error: "Please provide full details" });
        }
    
        const user = await Schema.create({ name, rating, badgenumber, contactnumber, experience, pic, location });
       
        
            if (user) {
            res.status(200).json({
                
                _id: user._id,
                name: user.name,
                rating: user.rating,
                badgenumber: user.badgenumber,
                contactnumber: user.contactnumber,
                experience: user.experience,
                pic: user.pic,
                location: user.location
            });
        } else {
            res.status(500).json({ error: "Failed to create user" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
   
}
export const allusers=async(req,res)=>{
    const users = await Schema.find();
   res.json(users);
}