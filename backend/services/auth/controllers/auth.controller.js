import { app } from "../config/firebase.js";
import { getAuth } from "firebase-admin/auth";
import User from "../models/user.model.js";
import crypto from "crypto";
import redis from "../../../shared/redis/redis.js";

export const login =async(req ,res) =>{
    try {
        const {token} =req.body
        const decoded =await getAuth(app).verifyIdToken(token)
       
        const user=await User.findOne({
            firebaseUid:decoded.uid
        })

if(!user){
    user=await User.create({
        firebaseUid:decoded.uid,
        name:decoded.name,
        email:decoded.email,
        avatar:decoded.picture
    })
}

const sessionID =crypto.randomUUID()

await redis.set(`session-${sessionID}`,JSON.stringify({
    name:user.name,
    userId:user._id,
    email:user.email,
    avatar:user.avatar
}),"EX",7*24*60*60)


res.cookie("session",sessionID,{
    httpOnly:true,
    secure:false,
    samesite:"strict",
    maxAge:7*24*60*60*1000
})


        return res.status(200).json(user)      
    } catch (error) {
        return res.status(500).json({message:`login error ${error}`})
    }
}

