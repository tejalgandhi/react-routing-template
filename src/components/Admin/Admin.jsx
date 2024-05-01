import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h2>Admin</h2>
      <ul>
        <li>
          <Link to="/admin/sales"> sales</Link>
        </li>
        <li>
          <Link to="/admin/sellers">Sellers</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Admin;
