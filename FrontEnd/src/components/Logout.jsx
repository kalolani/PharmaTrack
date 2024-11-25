import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

function Logout() {
  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <DashboardWelcome />
    </div>
  );
}

export default Logout;
