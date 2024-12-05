import { dataset_a, dataset_b } from "../../assets/data";
import { Chart as ChartJS, registerables } from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

export default function Task1() {
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [previousMonthData, setPreviousMonthData] = useState([]);

  useEffect(() => {
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

    const filteredCurrentMonth = dataset_b.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate.getMonth() + 1 === currentMonth;
    });

    const filteredPreviousMonth = dataset_b.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate.getMonth() + 1 === previousMonth;
    });

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

  const totalSalesChartData = {
    labels: dataset_a.map((item) => item.Product),
    datasets: [
      {
        label: "Total Sales",
        data: dataset_a.map((item) => item.TotalSales),
        backgroundColor: dataset_a.map((item) => {
          const maxValue = Math.max(...dataset_a.map((d) => d.TotalSales));
          const intensity = Math.round((item.TotalSales / maxValue) * 255);
          return `rgba(255, ${255 - intensity}, ${255 - intensity}, 0.8)`;
        }),
      },
    ],
  };

  const comparisonChartData = {
    labels: productLabels,
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
      <div className="my-10 mx-10">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Interactive Bar Charts
        </h1>

        {/* First Chart */}
        <div className="mx-40 mb-20">
          <h2 className="font-semibold text-xl mb-8">
            Total Sales of Products
          </h2>
          <Bar data={totalSalesChartData} options={chartOptions} />
        </div>
        {/* Second Chart */}
        <div className="mx-40 mb-20">
          <h2 className="font-semibold text-xl mb-8">
            Current & Previous Month Sales by Product
          </h2>
          <Bar data={comparisonChartData} options={chartOptions} />
        </div>
      </div>
    </>
  );
}
