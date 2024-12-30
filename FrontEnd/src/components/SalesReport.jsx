import AdminNavBar from "./AdminNavBar";
import DashboardStatics from "./DashboardStatics";
import DashboardWelcome from "./DashboardWelcome";

import MedicineSalesTable from "./medicineSalesTable";
import SalesChartContainer from "./SalesChartContainer";
// import PageNav from "./PageNav";
function SalesReport() {
  return (
    <div className="relative z-10 pt-6 pb-8 px-4 w-[85%] h-full bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />
      <DashboardWelcome />
      <DashboardStatics />
      <SalesChartContainer />
      <div className="relative z-10 mt-8">
        <MedicineSalesTable />
      </div>
    </div>
  );
}

export default SalesReport;
