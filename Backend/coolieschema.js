import mongoose from "mongoose";
const coolieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: String, required: true },
  badgenumber: { type: String, required: true },
  contactnumber: { type: String, required: true },
  experience: { type: String, required: true },
  pic: {
    type: "String",
    required: true,
  },
  location:{
    type:"String",
    required:true
  }
});
export const Schema = mongoose.model("coolie", coolieSchema);
