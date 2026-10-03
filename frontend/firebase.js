
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "codeforge-8642f.firebaseapp.com",
  projectId: "codeforge-8642f",
  storageBucket: "codeforge-8642f.firebasestorage.app",
  messagingSenderId: "151369032853",
  appId: "1:151369032853:web:f086ba5749bf921c14679c"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const googleProvider =new GoogleAuthProvider()