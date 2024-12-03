import { dataset_a, dataset_b } from "./assets/data";
import { Chart as ChartJS, registerables } from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

function App() {
  const currentMonth = new Date().getMonth() + 1; // Get the current month
  const previousMonth = currentMonth - 1; // Get the previous month

  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [previousMonthData, setPreviousMonthData] = useState([]);

  useEffect(() => {
    // Dynamically determine the latest month in the dataset as the current month
    const parsedDates = dataset_b.map((item) => new Date(item.Date));
    const latestDate = new Date(
      Math.max.apply(
        null,
        parsedDates.map((date) => date.getTime())
      )
    );

    const currentMonth = latestDate.getMonth() + 1; // Latest month (1-based)
    const previousMonth = currentMonth - 1 || 12; // Handle January rollover

    console.log("Dynamically Calculated Current Month:", currentMonth);
    console.log("Dynamically Calculated Previous Month:", previousMonth);

    // Filter data for current and previous months
    const filteredCurrentMonth = dataset_b.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate.getMonth() + 1 === currentMonth;
    });

    const filteredPreviousMonth = dataset_b.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate.getMonth() + 1 === previousMonth;
    });

    console.log("Filtered Current Month Data:", filteredCurrentMonth);
    console.log("Filtered Previous Month Data:", filteredPreviousMonth);

    setCurrentMonthData(filteredCurrentMonth);
    setPreviousMonthData(filteredPreviousMonth);
  }, []);

  // Get unique product labels
  const productLabels = [
    ...new Set([
      ...dataset_a.map((item) => item.Product),
      ...dataset_b.map((item) => item.Product),
    ]),
  ];

  // Chart Data for First Chart
  // Chart Data for First Chart
  const totalSalesChartData = {
    labels: dataset_a.map((item) => item.Product),
    datasets: [
      {
        label: "Total Sales",
        data: dataset_a.map((item) => item.TotalSales),
        backgroundColor: dataset_a.map((item) => {
          // Use a gradient or intensity logic for color based on TotalSales
          const maxValue = Math.max(...dataset_a.map((d) => d.TotalSales));
          const intensity = Math.round((item.TotalSales / maxValue) * 255); // Scale 0-255
          return `rgba(255, ${255 - intensity}, ${255 - intensity}, 0.8)`; // Red-to-Light Gradient
        }),
      },
    ],
  };

  // Chart Data for Second Chart
  const comparisonChartData = {
    labels: productLabels, // Unique product names
    datasets: [
      {
        label: "Current Month Sales",
        type: "bar",
        data: productLabels.map((product) =>
          currentMonthData.reduce(
            (total, item) =>
              item.Product === product ? total + item.MonthSales : total,
            0
          )
        ),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Previous Month Sales",
        type: "line",
        data: productLabels.map((product) =>
          previousMonthData.reduce(
            (total, item) =>
              item.Product === product ? total + item.MonthSales : total,
            0
          )
        ),
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Interactive Bar Charts</h1>

        {/* First Chart */}
        <div style={{ marginBottom: "40px" }}>
          <h2>Total Sales of Products</h2>
          <Bar data={totalSalesChartData} options={chartOptions} />
        </div>
        {/* Second Chart */}
        <div>
          <h2>Current vs Previous Month Sales</h2>
          <Bar data={comparisonChartData} options={chartOptions} />
        </div>
      </div>
    </>
  );
}

export default App;
