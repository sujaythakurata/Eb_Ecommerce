import React from "react";
import { Routes, Route } from "react-router-dom"

const Main  = React.lazy(()=>import("../pages/main/Main"));
const Product  = React.lazy(()=>import("../pages/product/Product"));




export const Home = ()=>{
  return (
    <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Product/>}></Route>
        </Route>
    </Routes>

  );
};