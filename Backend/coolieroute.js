import express from "express";
import { allusers, cooliecontroller } from "./cooliecontroller.js";

const router=express.Router();
router.post("/",cooliecontroller);
router.get("/allusers",allusers);
export default router;