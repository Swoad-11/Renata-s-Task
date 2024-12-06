function Sidebar({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="pt-10 bg-gray-800 text-white w-64 flex flex-col overflow-auto border-b bottom-0 end-0 border-gray-200 dark:border-gray-600">
      <h2 className="text-2xl font-bold p-4">Dashboard</h2>
      <ul className="menu h-svh overflow-y-auto p-4 space-y-7">
        <li>
          <label>Division: </label>
          <select
            className="px-3 py-2 rounded-lg bg-gray-900"
            name="division"
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Barishal">Barishal</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
        </li>

        <li>
          <label>Gender: </label>

          <select
            className="px-3 py-2 rounded-lg bg-gray-900"
            name="gender"
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </li>
        <li>
          <label>Marital Status: </label>
          <select
            className="px-3 py-2 rounded-lg bg-gray-900"
            name="maritalStatus"
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
