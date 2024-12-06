import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-400 text-white">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Customer Name</th>
            <th className="px-4 py-2 text-left">Division</th>
            <th className="px-4 py-2 text-left">Gender</th>
            <th className="px-4 py-2 text-left">Marital Status</th>
            <th className="px-4 py-2 text-left">Age</th>
            <th className="px-4 py-2 text-left">Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.ID}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 border">{item.ID}</td>
              <td className="px-4 py-2 border">{item["Customer Name"]}</td>
              <td className="px-4 py-2 border">{item.Division}</td>
              <td className="px-4 py-2 border">{item.Gender}</td>
              <td className="px-4 py-2 border">{item.MaritalStatus}</td>
              <td className="px-4 py-2 border">{item.Age}</td>
              <td className="px-4 py-2 border">{item.Income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
