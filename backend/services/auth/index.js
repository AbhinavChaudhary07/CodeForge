import express from "express";
import dotenv from  "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const port =process.env.PORT || 8001

const app =express()

app.get("/",(req,res)=>{
    res.json({message: "hello from auth"})
})

app.listen(port,()=>{
   connectDB()
    console.log(`auth started at ${port}`)
})