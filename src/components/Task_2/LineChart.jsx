import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  // Calculate age groups and income averages
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

  // Prepare chart data
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

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Age Groups",
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Average Income",
          font: {
            size: 14,
          },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center my-10 px-4 sm:px-8 lg:px-20">
      <h1 className="font-bold text-center mb-8">
        Average Income by Age Group
      </h1>
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-3xl">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LineChart;
