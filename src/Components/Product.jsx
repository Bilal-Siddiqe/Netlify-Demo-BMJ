import React from 'react'
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div>Product Starts</div>

      <Outlet/> 

      <div>Product Ends</div>
    </>
  )
}

export default Product