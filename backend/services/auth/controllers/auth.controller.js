import { app } from "../config/firebase";
import {getAuth} from "firebase-admin/auth"

export const login =async(req ,res) =>{
    try {
        const {token} =req.body
        const decoded =app.getAuth(app).verifyIdToken(token)
        
    } catch (error) {
        
    }
}