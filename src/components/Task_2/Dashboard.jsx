import BarChart from "./BarChart";
import DataTable from "./Datatable";
import Header from "./Header";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function DashboardContent({ data }) {
  return (
    <div className="pt-12 p-4 bg-gray-50 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
        <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded-lg shadow-md">
          <BarChart data={data} />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <PieChart data={data} />
        </div>
        <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded-lg shadow-md">
          <LineChart data={data} />
        </div>
      </div>
      <DataTable data={data} />
    </div>
  );
}

export default DashboardContent;
