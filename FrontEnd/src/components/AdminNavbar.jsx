import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function AdminNavBar() {
  return (
    <div className="relative z-10 w-full flex gap-6 w-full items-center justify-around">
      <div className="relative z-10 w-1/2">
        <input
          name="search"
          type="text"
          placeholder="Search here"
          className="w-full bg-[#FDFDFD] px-4 py-3 pl-6 rounded-lg outline-0 border-[1px]"
        />
        <CiSearch
          color="#A4A4A4"
          className="absolute top-1/2 right-[20px] w-[24px] h-[24px] transform -translate-y-1/2"
        />
      </div>
      <div className="relative z-10 flex gap-6 items-center justify-center">
        <div className="relative z-10 bg-[#007AFF] bg-opacity-[0.15] w-[48px] h-[48px] rounded-2xl cursor-pointer">
          <IoMdNotificationsOutline
            size={25}
            color="#007AFF"
            className="absolute z-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
          <div className="absolute z-10 -top-[7px] -right-[5px] bg-[#007AFF] bg-opacity-[0.15] w-[25px] h-[25px] text-white rounded-full border-4 border-[#F3F2F7]">
            <div className="relative z-10">
              {" "}
              <p className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2  text-[12px] text-white">
                21
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-[#007AFF] bg-opacity-[0.15] w-[48px] h-[48px] rounded-2xl cursor-pointer">
          <RiMessage2Line
            size={25}
            color="#2D9CDB"
            className="absolute z-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
          <div className="absolute z-10 -top-[7px] -right-[5px] bg-[#007AFF] bg-opacity-[0.45] w-[25px] h-[25px] text-white rounded-full border-4 border-[#F3F2F7]">
            <div className="relative z-10">
              {" "}
              <p className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2  text-[12px] text-white">
                53
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-[#5E6C93] bg-opacity-[0.15] w-[48px] h-[48px] rounded-2xl cursor-pointer">
          <GoGift
            size={25}
            color="#5E6C93"
            className="absolute z-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
          <div className="absolute z-10 -top-[7px] -right-[5px] bg-[#5E6C93] bg-opacity-[0.65] w-[25px] h-[25px] text-white rounded-full border-4 border-[#F3F2F7]">
            <div className="relative z-10">
              {" "}
              <p className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2  text-[12px] text-white">
                15
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-[#FF5B5B] bg-opacity-[0.15] w-[48px] h-[48px] rounded-2xl cursor-pointer">
          <MdOutlineSettings
            size={25}
            color="#FF5B5B"
            className="absolute z-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
          <div className="absolute z-10 -top-[7px] -right-[5px] bg-[#FF5B5B] bg-opacity-[0.85] w-[25px] h-[25px] text-white rounded-full border-4 border-[#F3F2F7]">
            <div className="relative z-10">
              {" "}
              <p className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2  text-[12px] text-white">
                15
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1px] h-[50px] bg-[#D0D6DE]"></div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-[#464255] text-[15px] font-poppins">
          Hello, <strong>Kaleab</strong>
        </p>
        <img src="/kal.png" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
}

export default AdminNavBar;
