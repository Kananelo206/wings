// CategoryMenu.jsx
import React, { useState } from "react";

const CategoryMenu = ({ onSelectCategory }) => {
  const categories = ["Drinks", "Snacks", "Desserts", "Main Course", "Salads"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    onSelectCategory(e.target.value); // Send selected category to parent
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <label htmlFor="category" style={{ marginRight: "10px" }}>
        Select Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        style={{ padding: "5px", fontSize: "16px" }}
      >
        <option value="">--Choose--</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <p style={{ marginTop: "10px" }}>You selected: {selectedCategory}</p>
      )}
    </div>
  );
};

export default CategoryMenu;
