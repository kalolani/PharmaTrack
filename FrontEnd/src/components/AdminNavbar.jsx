import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function AdminNavBar() {
  return (
    <div className="flex gap-6 w-full items-center justify-center">
      <input
        name="search"
        type="text"
        placeholder="search"
        className="w-[50%] bg-[#FDFDFD] p-2 rounded-md outline-0"
      />
      
      <div className="flex gap-6 items-center justify-center">
        <div className="bg-[#007AFF] bg-opacity-[0.15] p-[6px] rounded-full cursor-pointer">
          <IoMdNotificationsOutline size={25} color="#007AFF" />
        </div>
        <div className="bg-[#2D9CDB] bg-opacity-[0.15] p-[6px] rounded-full cursor-pointer">
          <RiMessage2Line size={25} color="#2D9CDB" />
        </div>
        <div className="bg-[#5E6C93] bg-opacity-[0.15] p-[6px] rounded-full cursor-pointer">
          <GoGift size={25} color="#5E6C93" />
        </div>
        <div className="bg-[#FF5B5B] bg-opacity-[0.15] p-[6px] rounded-full cursor-pointer">
          <MdOutlineSettings size={25} color="#FF5B5B" />
        </div>
      </div>
      <div className="w-[1px] h-[50px] bg-[#D0D6DE]"></div>
      <div className="flex items-center justify-center gap-[6px]">
        <p className="text-[#464255] text-[15px] ">Kaleab Gemechu</p>
        <img src="kal.png" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
}

export default AdminNavBar;
