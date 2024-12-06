function Header() {
  return (
    <div className="header bg-gray-100 p-4 flex justify-between items-center shadow mb-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-2 py-1"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Notifications
        </button>
      </div>
    </div>
  );
}

export default Header;
