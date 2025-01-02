// import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { Outlet } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const data = [
  {
    id: 1,
    title: " Dashboard",
    iconc: <HiOutlineHome size={20} color="#00B074" />,
    icon: <HiOutlineHome size={20} />,
    link: "home",
    sub: [{ sub: "", to: "home" }],
  },
  {
    id: 2,
    title: " Sales",
    iconc: <CiBadgeDollar size={20} color="#00B074" />,
    icon: <CiBadgeDollar size={20} />,
    arrowUp: (
      <MdOutlineKeyboardArrowUp color="#00B074" className="absolute right-5" />
    ),
    arrowDown: (
      <MdKeyboardArrowDown color="#464255" className="absolute right-5" />
    ),
    sub: [
      { sub: "New Sale", to: "newSale" },
      { sub: "Sale History", to: "saleHistory" },
    ],
  },
  {
    id: 3,
    title: " Inventery",
    iconc: <MdOutlineInventory2 size={20} color="#00B074" />,
    icon: <MdOutlineInventory2 size={20} />,
    arrowUp: (
      <MdOutlineKeyboardArrowUp color="#00B074" className="absolute right-5" />
    ),
    arrowDown: (
      <MdKeyboardArrowDown color="#464255" className="absolute right-5" />
    ),
    sub: [
      { sub: "All Medicine", to: "medicines" },
      { sub: "Add New Stock", to: "addStock" },

      { sub: "Purchase Medicine", to: "purchase" },
      { sub: "Low Stock", to: "lowStock" },
      { sub: "Expiry Management", to: "expiryManagement" },
    ],
  },
  {
    id: 4,
    title: "Reports",
    iconc: <TbFileReport size={20} color="#00B074" />,
    icon: <TbFileReport size={20} />,
    arrowUp: (
      <MdOutlineKeyboardArrowUp color="#00B074" className="absolute right-5" />
    ),
    arrowDown: (
      <MdKeyboardArrowDown color="#464255" className="absolute right-5" />
    ),
    sub: [
      { sub: "Sales Reports", to: "salesReport" },
      { sub: "Inventory Reports", to: "inventoryReport" },
      { sub: "Financial Reports", to: "financialReport" },
    ],
  },

  {
    id: 6,
    title: "Settings",
    iconc: <IoSettingsOutline size={20} color="#00B074" />,
    icon: <IoSettingsOutline size={20} />,
    arrowUp: (
      <MdOutlineKeyboardArrowUp color="#00B074" className="absolute right-5" />
    ),
    arrowDown: (
      <MdKeyboardArrowDown color="#464255" className="absolute right-5" />
    ),
    sub: [
      { sub: "System Settings", to: "systemSetting" },
      { sub: "Notifications", to: "notify" },
    ],
  },
  {
    id: 7,
    title: "Help",
    iconc: <IoMdHelpCircleOutline size={20} color="#00B074" />,
    icon: <IoMdHelpCircleOutline size={20} />,
    arrowUp: (
      <MdOutlineKeyboardArrowUp color="#00B074" className="absolute right-5" />
    ),
    arrowDown: (
      <MdKeyboardArrowDown color="#464255" className="absolute right-5" />
    ),
    sub: [
      { sub: "User Guide", to: "userGuide" },
      { sub: "Contact Support", to: "contactSupport" },
      { sub: "FAQs", to: "faqs" },
    ],
  },
  {
    id: 5,
    title: "Notification",
    iconc: <RiNotification2Line size={20} color="#00B074" />,
    icon: <RiNotification2Line size={20} />,
    link: "notify",
    sub: [{ sub: "", to: "notification" }],
  },
  {
    id: 8,
    title: "Logout",
    iconc: <AiOutlineLogout size={20} color="#00B074" />,
    icon: <AiOutlineLogout size={20} />,
    link: "logout",
    // sub: [],
    sub: [{ sub: "", to: "logout" }],
  },
];

function AdminDashboard() {
  return (
    <div>
      <hr className=" h-[1px] bg-[rgb(209 213 219)]" />
      <div className="flex relative">
        <Sidebar data={data} />
        {/* <Dashboard /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
