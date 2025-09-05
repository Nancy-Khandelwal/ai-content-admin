import React from "react";
import ArticleStatusChart from "../constant/ArticleStatusChart";

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2">Articles Today: 12</p>
      </div>

      {/* Chart Component */}
      <ArticleStatusChart />
    </div>
  );
}

export default Dashboard;
