import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Checkout from "./Pages/Checkout";
import Navbar from "./Components/Navbar"
import AuthProvider from "./Context/AuthContext"

function App() {

  return (
    <AuthProvider>
    <div className='app'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
