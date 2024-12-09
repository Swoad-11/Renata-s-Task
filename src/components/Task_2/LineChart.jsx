import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const ageGroups = Array.from(
    new Set(data.map((item) => Math.floor(item.Age / 10) * 10))
  ).sort((a, b) => a - b);

  const incomeByAgeGroup = ageGroups.map((group) => {
    const groupData = data.filter(
      (item) => Math.floor(item.Age / 10) * 10 === group
    );
    return (
      groupData.reduce((sum, item) => sum + item.Income, 0) / groupData.length
    );
  });

  const chartData = {
    labels: ageGroups.map((age) => `${age}-${age + 9}`),
    datasets: [
      {
        label: "Average Income Based on Age",
        data: incomeByAgeGroup,
        fill: false,
        borderColor: "#4BC0C0",
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
