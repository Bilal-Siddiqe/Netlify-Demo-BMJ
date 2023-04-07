import React from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Hero from './Components/Hero'
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
      </Routes>


      <h1>App Ended</h1>


    </div>
  )
}

export default App

