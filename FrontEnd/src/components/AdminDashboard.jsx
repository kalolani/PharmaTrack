import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";

const data = [
  {
    id: 1,
    title: " Dashboard",
    iconc: <HiOutlineHome size={20} color="#00B074" />,
    icon: <HiOutlineHome size={20} />,
    sub: [],
  },
  {
    id: 2,
    title: " Sales",
    iconc: <CiBadgeDollar size={20} color="#00B074" />,
    icon: <CiBadgeDollar size={20} />,
    sub: ["New Sale", "Sale History"],
  },
  {
    id: 3,
    title: " Inventery",
    iconc: <MdOutlineInventory2 size={20} color="#00B074" />,
    icon: <MdOutlineInventory2 size={20} />,
    sub: ["All Medicines", "Add New Stock", "Low Stock", "Expiry Management"],
  },
  {
    id: 4,
    title: "Reports",
    iconc: <TbFileReport size={20} color="#00B074" />,
    icon: <TbFileReport size={20} />,
    sub: [
      "Sales Reports",
      "Inventory Reports",
      "Financial Reports",
      "Custom Reports",
    ],
  },
  {
    id: 5,
    title: "Notification",
    iconc: <RiNotification2Line size={20} color="#00B074" />,
    icon: <RiNotification2Line size={20} />,
    sub: [],
  },
  {
    id: 6,
    title: "Settings",
    iconc: <IoSettingsOutline size={20} color="#00B074" />,
    icon: <IoSettingsOutline size={20} />,
    sub: ["System Settings", "Notifications"],
  },
  {
    id: 7,
    title: "Help",
    iconc: <IoMdHelpCircleOutline size={20} color="#00B074" />,
    icon: <IoMdHelpCircleOutline size={20} />,
    sub: ["User Guide", "Contact Support", "FAQs"],
  },
  {
    id: 8,
    title: "Logout",
    iconc: <AiOutlineLogout size={20} color="#00B074" />,
    icon: <AiOutlineLogout size={20} />,
    sub: ["New Sale", "Sale History"],
  },
];

function AdminDashboard() {
  return (
    <div>
      <hr className=" h-[1px] bg-[rgb(209 213 219)]" />
      <div className="flex relative">
        <Sidebar data={data} />
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminDashboard;
