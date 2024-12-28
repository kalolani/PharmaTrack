import { GiMoneyStack } from "react-icons/gi";
import { IoArrowUpCircleOutline } from "react-icons/io5";

function DashboardStatics() {
  return (
    <div className="grid grid-cols-4 gap-4 pt-[20px]">
      <div className="flex justify-center items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="relative w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <GiMoneyStack
            size={40}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[15px] font-bold">75</p>
          <p>Total Revenue</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[15px] font-normal">4%(30days)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="relative  w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <img
            src="/units.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[15px] font-bold">75</p>
          <p>Total Units Sold</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[15px] font-normal">4%(30days)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 px-4 py-2 bg-white rounded-lg shadow-md">
        <div className="relative  w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <img
            src="/medicine icon.jpg"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[15px] font-bold">75</p>
          <p>Top Product</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[15px] font-normal">4%(30days)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="relative  w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <img
            src="/stat.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[15px] font-bold">75</p>
          <p>Sales Growth</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[15px] font-normal">4%(30days)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStatics;
