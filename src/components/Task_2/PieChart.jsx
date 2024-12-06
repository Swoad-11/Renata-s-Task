import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const genderCounts = data.reduce(
    (acc, item) => {
      acc[item.Gender === "M" ? "Male" : "Female"]++;
      return acc;
    },
    { Male: 0, Female: 0 }
  );

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

  return <Pie data={chartData} />;
};

export default PieChart;
