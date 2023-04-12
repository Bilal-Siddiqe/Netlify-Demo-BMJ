import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Product from './Components/Product'
import HeroSection from './Components/HeroSection'
import Shirt from './Components/Shirt'
import Pents from './Components/Pents'
import { Routes, Route } from "react-router-dom";

// Single Page Application (SPA)

function App() {
  return (
    <div >

      {/* 
      <Main />
      <Product/> */}

      <Navbar />

      <div className='text-center'>

        <Routes>

          <Route path="/" element={<HeroSection />} />
          
          <Route path="/main" element={<Main />} />

          <Route path="/product" element={<Product />}>
            <Route path="shirt" element={<Shirt />} />
            <Route path="pents" element={<Pents />} />
          </Route>

        </Routes>

      </div>










    </div>
  )
}
export default App

