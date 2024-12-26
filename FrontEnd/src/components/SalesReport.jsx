import AdminNavBar from "./AdminNavBar";
import DashboardStatics from "./DashboardStatics";
import DashboardWelcome from "./DashboardWelcome";
import MedicineSalesTable from "./medicineSalesTable";
import SalesChartContainer from "./SalesChartContainer";
// import PageNav from "./PageNav";
function SalesReport() {
  return (
    <div className="relative pt-6 pb-8 px-4 w-[85%] h-full bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <DashboardWelcome />
      <DashboardStatics />
      <SalesChartContainer />
      <div className="mt-8">
        <MedicineSalesTable />
      </div>
    </div>
  );
}

export default SalesReport;
