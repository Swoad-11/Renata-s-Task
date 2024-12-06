import DashboardContent from "./dashboard";
import Sidebar from "./Sidebar";
import { dataset_task2 } from "../../assets/data";
import { useState } from "react";

const Task2 = () => {
  const [filters, setFilters] = useState({
    division: "",
    gender: "",
    maritalStatus: "",
  });

  const filteredData = dataset_task2.filter((item) => {
    return (
      (filters.division === "" || item.Division === filters.division) &&
      (filters.gender === "" || item.Gender === filters.gender) &&
      (filters.maritalStatus === "" ||
        item.MaritalStatus === filters.maritalStatus)
    );
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <DashboardContent data={filteredData} />
      </div>
    </div>
  );
};

export default Task2;
