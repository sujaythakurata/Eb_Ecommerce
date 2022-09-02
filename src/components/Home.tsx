import React from "react";
import { Routes, Route } from "react-router-dom"

const Main  = React.lazy(()=>import("../pages/main/Main"));
const Product  = React.lazy(()=>import("../pages/product/Product"));
const Cart  = React.lazy(()=>import("../pages/cart/Cart"));




export const Home = ()=>{
  return (
    <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Product/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
        </Route>
    </Routes>

  );
};