import mongoose from "mongoose";
import mongouri from "./constant.js";

export const connectdb=async function main() {
  await mongoose.connect(mongouri);
console.log("database connected");
}