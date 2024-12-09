import React from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data }) => {
  // Count males and females
  const genderCounts = data.reduce(
    (acc, item) => {
      acc[item.Gender === "M" ? "Male" : "Female"]++;
      return acc;
    },
    { Male: 0, Female: 0 }
  );

  // Prepare chart data
  const chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [genderCounts.Male, genderCounts.Female],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Chart options including datalabels configuration
  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          size: 16,
        },
        formatter: (value, context) => {
          return `${value}`; // Show raw number
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
