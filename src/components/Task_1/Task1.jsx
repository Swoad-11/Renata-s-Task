import { dataset_a, dataset_b } from "../../assets/data";
import { Chart as ChartJS, registerables } from "chart.js";
import React, { useEffect, useState } from "react";
import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";
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
          return `rgba(200, ${255 - intensity}, ${255 - intensity}, 1)`;
        }),
      },
    ],
  };

  const comparisonChartData = {
    labels: productLabels,
    datasets: [
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
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 2,
        fill: false,
      },
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
        backgroundColor: "rgba(0, 0, 153, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

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
    <div className="my-10 mx-4 sm:mx-10">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-6">
        Interactive Bar Charts
      </h1>

      {/* First Chart */}
      <Chart1 data={totalSalesChartData} options={chartOptions} />

      {/* Second Chart */}
      <Chart2 data={comparisonChartData} options={chartOptions} />
    </div>
  );
}
