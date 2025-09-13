import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Customers.css";

function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "kananelo Mohale", email: "mohale@gmail.com" },
    { id: 2, name: "Olivia mohapi", email: "olivia@gmail.com" },
  ]);

  const [newCustomer, setNewCustomer] = useState({ name: "", email: "" });

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email) return;

    setCustomers([
      ...customers,
      { id: customers.length + 1, ...newCustomer },
    ]);
    setNewCustomer({ name: "", email: "" });
  };

  return (
    <div className="customers-container">
      <h2>Customer Management</h2>

      <div className="customer-form">
        <input
          type="text"
          placeholder="Name"
          value={newCustomer.name}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, email: e.target.value })
          }
        />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>

      <h3>Customer List</h3>
      <ul className="customer-list">
        {customers.map((cust) => (
          <li key={cust.id}>
            <strong>{cust.name}</strong> - {cust.email}
          </li>
        ))}
      </ul>

      <Link to="/" className="back-btn">⬅ Back to Dashboard</Link>
    </div>
  );
}

export default Customers;
