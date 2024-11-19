import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <div>
      <hr className=" h-[1px] bg-[rgb(209 213 219)]" />
      <div className="flex relative">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminDashboard;
