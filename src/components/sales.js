import React, { useState } from "react";
import productsData from "../data/products.json";
import "./Sales.css";   // <--- add this line

function Sales() {
  const [sales, setSales] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddSale = () => {
    if (!selectedProduct || !quantity) return;

    const product = productsData.find((p) => p.id === parseInt(selectedProduct));
    if (!product || product.quantity < quantity) {
      alert("Not enough stock!");
      return;
    }

    setSales([
      ...sales,
      {
        id: sales.length + 1,
        productName: product.name,
        quantity: parseInt(quantity),
        total: product.price * quantity,
        date: new Date().toLocaleString(),
      },
    ]);

    product.quantity -= quantity;
    setSelectedProduct("");
    setQuantity("");
  };

  return (
    <div className="sales-container">
      <h1>Sales Module</h1>

      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="">Select Product</option>
        {productsData.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} (Stock: {p.quantity})
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleAddSale}>Record Sale</button>

      <h2>Sales Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.productName}</td>
              <td>{s.quantity}</td>
              <td>M{s.total}</td>
              <td>{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;
