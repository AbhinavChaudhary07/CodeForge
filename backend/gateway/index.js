import express from "express";
import dotenv from  "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();
const port =process.env.PORT || 8000 

const app =express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(cookieParser()) 
app.use(morgan("dev")) 

app.use("/api/auth",proxy(process.env.AUTH_SERVICE)) 
app.get("/",(req,res)=>{
    res.json({message: "hello from gateway"}) 
})

app.listen(port,()=>{
    console.log(`gateway started at ${port}`) 
})