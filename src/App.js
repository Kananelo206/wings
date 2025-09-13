import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Stock from "./components/Stock";
import Customers from "./components/Customers";
import Reporting from "./components/Reporting";
import Sales from "./components/sales";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Stock />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </Router>
  );
}

export default App;
