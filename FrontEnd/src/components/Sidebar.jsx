import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlinePlus,
  HiOutlineListBullet,
  HiOutlineGift,
} from "react-icons/hi2";
import { HiOutlineViewGridAdd, HiOutlineViewGrid } from "react-icons/hi";
// import { useStores } from "../../contexts/storeContext";

function Sidebar() {
  // const { token } = useStores();
  // if (!token) return;
  return (
    <div className="w-[15%] min-h-screen border-t-[0] text-[max(1vw, 10px)] bg-[#FFFFFF]">
      <div className="p-[7%] pt-[20px] flex flex-col gap-[25px] items-center">
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
        <NavLink
          to="/home"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineHome size={20} color="rgb(37 99 235)" />

          <p className="text-[17px] text-[rgb(107 114 128)] font-medium uppercase">
            OVERVIEW
          </p>
        </NavLink>
        <NavLink
          to="/add"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlinePlus size={20} color="rgb(37 99 235)" />

          <p>ADD ITEMS</p>
        </NavLink>
        <NavLink
          to="/list"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineListBullet size={20} color="rgb(37 99 235)" />

          <p>List items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineGift size={20} color="rgb(37 99 235)" />
          <p>Orders</p>
        </NavLink>
        <NavLink
          to="/category"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineViewGridAdd size={20} color="rgb(37 99 235)" />
          <p>Add menu</p>
        </NavLink>
        <NavLink
          to="/catlist"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineViewGrid size={20} color="rgb(37 99 235)" />
          <p>List menu</p>
        </NavLink>
        <NavLink
          to="/users"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineUsers size={20} color="rgb(37 99 235)" />

          <p>Users</p>
        </NavLink>
        <NavLink
          to="/feedback"
          className="w-[90%] flex items-center gap-[12px] p-[8px] cursor-pointer pl-[10px]"
        >
          <HiOutlineUsers size={20} color="rgb(37 99 235)" />

          <p>Feedback</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
