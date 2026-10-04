import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth ,googleProvider } from '../firebase.js'
import { login } from './features/login.js'


function App() {
  
  const handleLogin =async()=>{
    const result =await signInWithPopup(auth ,googleProvider)
    const token=await result.user.getIdToken()
    const data =await login(token)
    console.log(data)
  }
  return (
    <div>
      <button onClick={handleLogin}>Continue With Google</button>
    </div>
  )
}

export default App
