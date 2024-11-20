import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";

function Sidebar() {
  const [dashActive, setDashActive] = useState(true);
  const [saleActive, setSaleActive] = useState(false);
  const [inventaryActive, setInventaryActive] = useState(false);
  const [reportActive, setReportActive] = useState(false);
  const [notActive, setNotActive] = useState(false);
  const [setActive, setSetActive] = useState(false);
  const [helpActive, setHelpActive] = useState(false);
  const [logActive, setLogActive] = useState(false);

  function dashHandler() {
    setDashActive(!dashActive);
    setSaleActive(false);
    setInventaryActive(false);
    setReportActive(false);
    setNotActive(false);
    setSetActive(false);
    setHelpActive(false);
    setLogActive(false);
  }
  function saleHandler() {
    setSaleActive(!saleActive);
    setDashActive(false);
    setInventaryActive(false);
    setReportActive(false);
    setNotActive(false);
    setSetActive(false);
    setHelpActive(false);
    setLogActive(false);
  }
  function inventaryHandler() {
    setInventaryActive(!inventaryActive);
    setDashActive(false);
    setSaleActive(false);
    setReportActive(false);
    setNotActive(false);
    setSetActive(false);
    setHelpActive(false);
    setLogActive(false);
  }
  function reportHandler() {
    setReportActive(!reportActive);
    setDashActive(false);
    setSaleActive(false);
    setInventaryActive(false);
    setNotActive(false);
    setSetActive(false);
    setHelpActive(false);
    setLogActive(false);
  }
  function notHandler() {
    setNotActive(!notActive);
    setDashActive(false);
    setSaleActive(false);
    setInventaryActive(false);
    setReportActive(false);
    setSetActive(false);
    setHelpActive(false);
    setLogActive(false);
  }
  function setHandler() {
    setSetActive(!setActive);
    setDashActive(false);
    setSaleActive(false);
    setInventaryActive(false);
    setReportActive(false);
    setNotActive(false);
    setHelpActive(false);
    setLogActive(false);
  }
  function setHelp() {
    setHelpActive(!helpActive);
    setDashActive(false);
    setSaleActive(false);
    setInventaryActive(false);
    setReportActive(false);
    setNotActive(false);
    setSetActive(false);
    setLogActive(false);
  }
  function logoutHandler() {
    setLogActive(!logActive);
    setDashActive(false);
    setSaleActive(false);
    setInventaryActive(false);
    setReportActive(false);
    setNotActive(false);
    setSetActive(false);
    setHelpActive(false);
  }
  return (
    <div className="w-[15%] min-h-screen border-t-[0] text-[max(1vw, 10px)] bg-[#FFFFFF]">
      <div className="p-[7%] pt-[20px] flex flex-col gap-[20px] items-center">
        <div className="flex items-center cursor-pointer p-[4px] pl-[0px]">
          <div className="">
            <img
              src="pharma-logoo.png"
              alt="Logo"
              className="h-[60px] w-[max(10%,80px)]"
            />
          </div>
          <p className="text-[16px] font-bold font-Poppins">D-EXPRESS</p>
        </div>
        <div className="relative w-[100%]" onClick={dashHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              dashActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <HiOutlineHome
              size={20}
              className={`${dashActive ? "text-[#00B074]" : "text-[#464255]"}`}
            />

            <p
              className={`text-[17px] text-[18px] font-bold font-Poppins ${
                dashActive ? "text-[#00B074]" : "text-[#464255]"
              }`}
            >
              Dashboard
            </p>
            {dashActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div className="relative w-[100%]" onClick={saleHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              saleActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <CiBadgeDollar
              size={20}
              className={`${saleActive ? "text-[#00B074]" : "text-[#464255]"}`}
            />

            <p
              className={`text-[17px] text-[18px] font-bold font-Poppins ${
                saleActive ? "text-[#00B074]" : "text-[#464255]"
              }`}
            >
              Sales
            </p>
            {saleActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div className="relative w-[100%]" onClick={inventaryHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              inventaryActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <MdOutlineInventory2
              size={20}
              className={`${
                inventaryActive ? "text-[#00B074]" : "text-[#464255]"
              }`}
            />
            <p className="text-[17px] text-[18px] font-medium text-[#464255] font-Poppins">
              Inventery
            </p>
            {inventaryActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div className="relative w-[100%]" onClick={reportHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              reportActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <TbFileReport
              size={20}
              className={`${
                reportActive ? "text-[#00B074]" : "text-[#464255]"
              }`}
            />

            <p className="text-[17px] text-[18px] font-medium text-[#464255]">
              Reports
            </p>
            {reportActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div className="relative w-[100%]" onClick={notHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              notActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <RiNotification2Line
              size={20}
              className={`${notActive ? "text-[#00B074]" : "text-[#464255]"}`}
            />

            <p className="text-[17px] text-[18px] font-medium text-[#464255]">
              Notifications
            </p>
            {notActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>

        <div className="relative w-[100%]" onClick={setHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              setActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <IoSettingsOutline
              size={20}
              className={`${setActive ? "text-[#00B074]" : "text-[#464255]"}`}
            />

            <p className="text-[17px] text-[18px] font-medium text-[#464255]">
              Settings
            </p>
            {setActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div className="relative w-[100%]" onClick={setHelp}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              helpActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <IoMdHelpCircleOutline
              size={20}
              className={`${helpActive ? "text-[#00B074]" : "text-[#464255]"}`}
            />
            <p className="text-[17px] text-[18px] font-medium text-[#464255]">
              Help
            </p>
            {helpActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div className="relative w-[100%]" onClick={logoutHandler}>
          <NavLink
            className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
              logActive ? "bg-[#00B074] bg-opacity-[0.15]" : ""
            }`}
          >
            <AiOutlineLogout
              size={20}
              className={`${logActive ? "text-[#00B074]" : "text-[#464255]"}`}
            />
            <p className="text-[17px] text-[18px] font-medium text-[#464255]">
              Logout
            </p>
            {logActive ? (
              <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
