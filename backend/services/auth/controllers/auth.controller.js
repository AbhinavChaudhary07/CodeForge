import { app } from "../config/firebase.js";
import { getAuth } from "firebase-admin/auth";

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

        return res.json({decoded})      
    } catch (error) {
        return res.status(500).json({message:`login error ${error}`})
    }
}