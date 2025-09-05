import React from "react";
import Chart from "react-apexcharts";

function ArticleStatusChart() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Published", "Pending", "Rejected"],
    colors: ["#10B981", "#FBBF24", "#EF4444"], // green, yellow, red
    legend: {
      position: "bottom",
    },
  };

  // Dummy data (replace with your DB data later)
  const series = [45, 25, 10];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Article Status Distribution</h2>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
}

export default ArticleStatusChart;
