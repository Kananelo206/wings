import React from "react";
import { Link } from "react-router-dom";
import "./Reporting.css";

function Reporting() {
  const reports = [
    { id: 1, title: "Monthly Sales Report", date: "2025-09-01" },
    { id: 2, title: "Inventory Status Report", date: "2025-09-05" },
    { id: 3, title: "Customer Growth Report", date: "2025-09-08" },
  ];

  return (
    <div className="reporting-container">
      <h2>Reporting Module</h2>
      <p>Here you can view system reports:</p>

      <div className="report-list">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <h4>{report.title}</h4>
            <p>Date: {report.date}</p>
          </div>
        ))}
      </div>

      <Link to="/" className="back-btn">⬅ Back to Dashboard</Link>
    </div>
  );
}

export default Reporting;
