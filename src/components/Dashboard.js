import React from "react";
import {
  ResponsiveContainer,
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend
} from "recharts";
import "./Dashboard.css";

function Dashboard() {
  // --- Sample Data (replace with real JSON fetch later) ---
  const productData = [
    { category: "Coffee", count: 5 },
    { category: "Tea", count: 4 },
    { category: "Snacks", count: 3 }
  ];

  const salesData = [
    { day: "Mon", sales: 3 },
    { day: "Tue", sales: 7 },
    { day: "Wed", sales: 5 },
    { day: "Thu", sales: 8 },
    { day: "Fri", sales: 4 }
  ];

  const inventoryData = [
    { name: "In Stock", value: 250 },
    { name: "Reserved", value: 40 },
    { name: "Sold Today", value: 20 }
  ];

  const customerData = [
    { month: "Jan", registered: 3 },
    { month: "Feb", registered: 5 },
    { month: "Mar", registered: 7 }
  ];

  const reportData = [
    { type: "Daily", total: 2 },
    { type: "Monthly", total: 1 }
  ];

  const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0", "#F44336"];

  return (
    <div className="dashboard">
      <h1>Wings Café Inventory System</h1>
      <p className="subtitle">Graphs for Each Module</p>

      <div className="module-charts">
        {/* Products */}
        <div className="chart-card">
          <h3>Product Management</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales */}
        <div className="chart-card">
          <h3>Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#4CAF50" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Inventory */}
        <div className="chart-card">
          <h3>Inventory</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={inventoryData} dataKey="value" nameKey="name" outerRadius={90} label>
                {inventoryData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Customers */}
        <div className="chart-card">
          <h3>Customers</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="registered" fill="#9C27B0" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reporting */}
        <div className="chart-card">
          <h3>Reporting</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={reportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#F44336" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
