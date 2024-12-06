import BarChart from "./BarChart";
import Header from "./Header";

function DashboardContent({ data }) {
  return (
    <div className=" pt-12 dashboard-content p-4">
      <Header />
      <BarChart data={data} />
    </div>
  );
}

export default DashboardContent;
