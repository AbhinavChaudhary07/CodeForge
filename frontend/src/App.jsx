import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth ,googleProvider } from '../firebase.js'


function App() {
  const handleLogin =async()=>{
    const data =await signInWithPopup(auth ,googleProvider)
    const token=await data.user.getIdToken()
  }
  return (
    <div>
      <button onClick={handleLogin}>Continue With Google</button>
    </div>
  )
}

export default App
