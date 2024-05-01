import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
import Admin from "./components/Admin/Admin";
import Article from "./components/Article/Article";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />
      <hr />
      <main className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/article" element={<Article />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
