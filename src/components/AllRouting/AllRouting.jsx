import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import SingleProduct from "../Products/SingleProduct";
import Admin from "../Admin/Admin";
import Sales from "../Admin/Sales/Sales";
import Sellers from "../Admin/Sellers/Sellers";
import Article from "../Article/Article";
import NotFound from "../NotFound/NotFound";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/article" element={<Article />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="sales" element={<Sales />}></Route>
        <Route path="sellers" element={<Sellers />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRouting;
