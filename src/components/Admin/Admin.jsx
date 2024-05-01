import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const Admin = () => {
  const user = { role: "admin" };
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }
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
