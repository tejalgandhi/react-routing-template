import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Admin from "./components/Admin/Admin";
import Article from "./components/Article/Article";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <main className="main_code">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/article" element={<Article />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
