import { useEffect, useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import axios from "axios";

function DashboardStatics() {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const fetchTotalRevenue = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/system-total-revenue"
        );
        console.log(response);
        setTotalRevenue(response.data.systemTotalRevenue);
      } catch (error) {
        console.error("Error fetching total revenue:", error);
      }
    };

    fetchTotalRevenue();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 pt-[20px]">
      <div className="flex justify-center items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="relative w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <GiMoneyStack
            size={40}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-[#464255] text-[12px] font-bold">
            {totalRevenue} ETB
          </p>
          <p className="text-[#464255] text-[12px] font-bold">Total Revenue</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[12px] font-normal">4%(30days)</p>
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
          <p className="text-[#464255] text-[12px] font-bold">75</p>
          <p className="text-[#464255] text-[12px] font-bold">
            Total Units Sold
          </p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[12px] font-normal">4%(30days)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 px-4 py-2 bg-white rounded-lg shadow-md">
        <div className="relative  w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <img
            src="/tablet.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[12px] font-bold">75</p>
          <p className="text-[#464255] text-[12px] font-bold">Top Product</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[12px] font-normal">4%(30days)</p>
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
          <p className="text-[#464255] text-[12px] font-bold">75</p>
          <p className="text-[#464255] text-[12px] font-bold">Sales Growth</p>
          <div className="flex justify-center items-center gap-2">
            <IoArrowUpCircleOutline
              size={20}
              color="#00A389"
              className="bg-[#00A389] bg-opacity-[0.15] p-[2px] rounded-xl"
            />
            <p className="text-[#464255] text-[12px] font-normal">4%(30days)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStatics;
