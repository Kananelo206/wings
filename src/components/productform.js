// ProductForm.jsx
import React, { useState } from "react";
import CategoryMenu from "./CategoryMenu";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleCategorySelect = (category) => {
    setProduct({ ...product, category });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    // Here you can send the product data to JSON backend
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <CategoryMenu onSelectCategory={handleCategorySelect} />

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
