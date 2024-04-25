import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navbar_list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/article">Articles</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
