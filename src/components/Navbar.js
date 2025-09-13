import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Wings Café</h2>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/reporting">Reporting</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
