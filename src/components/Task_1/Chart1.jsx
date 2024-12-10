import React from "react";
import { Bar } from "react-chartjs-2";

export const Chart1 = ({ data, options }) => {
  return (
    <>
      <div className="mb-12 lg:mb-20">
        <h2 className="font-semibold text-lg sm:text-xl mb-6 text-center lg:text-left">
          Total Sales of Products
        </h2>
        <div className="w-full max-w-3xl mx-auto">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};
