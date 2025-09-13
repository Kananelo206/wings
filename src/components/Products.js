import "./products.css";
import React, { useState } from "react";
import productsData from "../data/products.json";


function Products() {
  const [products, setProducts] = useState(productsData);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (!form.name) return;
    const newProduct = {
      id: products.length + 1,
      ...form,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", category: "", price: "", quantity: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product.id);
  };

  const handleUpdate = () => {
    setProducts(
      products.map((p) =>
        p.id === editId
          ? { ...form, price: parseFloat(form.price), quantity: parseInt(form.quantity) }
          : p
      )
    );
    setEditId(null);
    setForm({ name: "", description: "", category: "", price: "", quantity: "" });
  };

  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="products">
      <h1>Product Management</h1>

      <div className="form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} />

        {editId ? (
          <button onClick={handleUpdate}>Update Product</button>
        ) : (
          <button onClick={handleAdd}>Add Product</button>
        )}
      </div>

      <table border="1" className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.category}</td>
              <td>M{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
