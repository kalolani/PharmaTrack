import AdminNavBar from "../components/AdminNavBar";
import DashboardWelcome from "../components/DashboardWelcome";
import DashboardStatics from "../components/DashboardStatics";
import ChartContainer from "../components/ChartContainer";

function Dashboard() {
  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <DashboardWelcome />
      <DashboardStatics />
      <ChartContainer />
    </div>
  );
}

export default Dashboard;
