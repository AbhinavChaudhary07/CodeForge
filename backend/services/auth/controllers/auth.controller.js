import { app } from "../config/firebase.js";
import { getAuth } from "firebase-admin/auth";

export const login =async(req ,res) =>{
    try {
        const {token} =req.body
        const decoded =await getAuth(app).verifyIdToken(token)
        console.log(decoded)
        return res.json({decoded})      
    } catch (error) {
        return res.status(500).json({message:`login error ${error}`})
    }
}