function Sidebar({ filters, setFilters, isSidebarOpen, toggleSidebar }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-gray-800`}
        aria-label="Sidebar"
      >
        <button
          onClick={toggleSidebar}
          className={`absolute top-2 right-2 text-gray-400 hover:text-gray-200 ${
            !isSidebarOpen ? "hidden" : ""
          } `}
        >
          Close
        </button>
        <div className="pt-16 bg-gray-800 text-white w-64 flex flex-col overflow-auto border-r border-gray-700">
          <div className="flex flex-col items-center mx-auto space-y-4">
            <div className="relative w-16 h-16 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700 shadow-lg">
              <svg
                className="absolute w-20 h-20 text-gray-500 -left-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
              Admin
            </h2>
          </div>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto text-gray-200">
          <ul className="space-y-4 font-medium">
            <li>
              <label className="block text-sm font-medium">Division</label>
              <select
                className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              <label className="block text-sm font-medium">Gender</label>
              <select
                className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="gender"
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </li>

            <li>
              <label className="block text-sm font-medium">
                Marital Status
              </label>
              <select
                className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
      </aside>
    </>
  );
}

export default Sidebar;
