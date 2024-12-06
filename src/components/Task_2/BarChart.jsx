import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  const divisions = [...new Set(data.map((item) => item.Division))];
  const averageIncome = divisions.map(
    (division) =>
      data
        .filter((item) => item.Division === division)
        .reduce((sum, curr) => sum + curr.Income, 0) /
      data.filter((item) => item.Division === division).length
  );

  const chartData = {
    labels: divisions,
    datasets: [
      {
        label: "Average Income",
        data: averageIncome,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
