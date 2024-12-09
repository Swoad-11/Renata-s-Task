import Dashboard from "../Task_2/Dashboard";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Task2 = () => {
  let apiEndpoint = "users";
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    division: "",
    gender: "",
    maritalStatus: "",
  });

  useEffect(() => {
    fetch("https://renata-s-task-backend.vercel.app/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filteredData = data.filter((item) => {
    return (
      (filters.division === "" || item.Division === filters.division) &&
      (filters.gender === "" || item.Gender === filters.gender) &&
      (filters.maritalStatus === "" ||
        item.MaritalStatus === filters.maritalStatus)
    );
  });
  console.log(filters);
  return (
    <div className="flex">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="flex-grow flex flex-col">
        <Dashboard data={filteredData} />
      </div>
    </div>
  );
};

export default Task2;
