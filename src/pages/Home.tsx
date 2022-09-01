import React from "react";
import { Routes, Route } from "react-router-dom";

const Main  = React.lazy(()=>import("./main/Main"));



export const Home = ()=>{
  return (
    <Routes>
        <Route path="/" element={<Main/>}></Route>
    </Routes>

  );
};