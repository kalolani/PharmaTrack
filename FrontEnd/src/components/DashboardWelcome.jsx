import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function DashboardWelcome() {
  return (
    <div className="px-[10px] pt-[20px] flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-[20px] font-semibold ">Dashboard</h1>
        <p className="text-[14px] text-[#A3A3A3] font-medium font-Poppins">
          Hi, Kaleab. Welcome back to Pharma Admin
        </p>
      </div>
      <div className="bg-white p-2 flex items-center justify-center gap-4 rounded-md border-[1px] cursor-pointer">
        <div className="relative w-[48px] h-[48px] bg-[#2D9CDB] bg-opacity-[0.15] rounded-2xl">
          {" "}
          <CiCalendar
            color="#2D9CDB"
            size={27}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="font-medium text-[10px]">Filter Periode</p>
          <p className="font-normal text-[8px]">17 April 2020 - 21 May 2020</p>
        </div>
        <IoIosArrowDown size={24} color="#2D9CDB" />
      </div>
    </div>
  );
}

export default DashboardWelcome;
