import React, { useState } from "react";
import productsData from "../data/products.json";
import "./Stock.css";


function Stock() {
  const [products, setProducts] = useState(productsData);
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    productId: "",
    type: "addition",
    quantity: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Record stock transaction
  const handleTransaction = () => {
    if (!form.productId || !form.quantity) return;

    const productIndex = products.findIndex(
      (p) => p.id === parseInt(form.productId)
    );
    if (productIndex === -1) return;

    const qty = parseInt(form.quantity);
    const type = form.type;

    // Update product quantity
    const updatedProducts = [...products];
    if (type === "addition") {
      updatedProducts[productIndex].quantity += qty;
    } else if (type === "deduction") {
      updatedProducts[productIndex].quantity -= qty;
      if (updatedProducts[productIndex].quantity < 0) {
        updatedProducts[productIndex].quantity = 0;
      }
    }
    setProducts(updatedProducts);

    // Record transaction
    const newTransaction = {
      id: transactions.length + 1,
      productId: parseInt(form.productId),
      type,
      quantity: qty,
      date: new Date().toLocaleString(),
    };
    setTransactions([newTransaction, ...transactions]);

    // Reset form
    setForm({ productId: "", type: "addition", quantity: "" });
  };

  return (
    <div className="stock">
      <h1>Stock Management</h1>

      <div className="form">
        <select
          name="productId"
          value={form.productId}
          onChange={handleChange}
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} (Current: {p.quantity})
            </option>
          ))}
        </select>

        <select name="type" value={form.type} onChange={handleChange}>
          <option value="addition">Add Stock</option>
          <option value="deduction">Deduct Stock</option>
        </select>

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <button onClick={handleTransaction}>Record Transaction</button>
      </div>

      <h2>Stock Transactions</h2>
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => {
            const product = products.find((p) => p.id === t.productId);
            return (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{product ? product.name : "Unknown"}</td>
                <td>{t.type}</td>
                <td>{t.quantity}</td>
                <td>{t.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
