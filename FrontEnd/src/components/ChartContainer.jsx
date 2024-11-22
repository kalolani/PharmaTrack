import PieChart from "./PieChart";
import { HiDotsVertical } from "react-icons/hi";
import { IoArrowDown } from "react-icons/io5";
import LineChart from "./LineChart";
import CustomLineChart from "./SalesRevenueChart";
import BarChart from "./BarChart";
import { IoMdArrowDropdown } from "react-icons/io";

function ChartContainer() {
  return (
    <div>
      <div className="pt-[20px] grid grid-cols-2 gap-4">
        <div className="relative grid grid-cols-3 bg-white rounded-xl shadow-lg">
          <div className="w-[95%] z-[9999] absolute top-[7px] left-5">
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] text-[#464255] font-bold font-Poppins">
                Pie Chart
              </h3>
              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center gap-2">
                  {" "}
                  <input
                    type="checkbox"
                    className="w-4 h-4 block border-2 border-red-500"
                  />
                  <label className="text-[#464255]">Chart</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 block border-2" />

                  <label className="text-[#464255]">Show value</label>
                </div>
                <HiDotsVertical color="#464255" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-[2px]">
            <PieChart />
            <p className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-[#464255]">
              Total Order
            </p>
          </div>
          <div className="relative flex flex-col gap-[2px]">
            <PieChart />
            <p className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-[#464255]">
              Total Sale
            </p>
          </div>
          <div className="relative flex flex-col gap-[2px]">
            <PieChart />
            <p className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-[#464255]">
              Total Revenue
            </p>
          </div>
        </div>
        <div className="relative bg-white rounded-xl shadow-lg">
          <div className="w-[90%] absolute z-[9999] flex items-center justify-between top-[3%] left-[5%]">
            <div className="flex flex-col">
              <h3 className="text-[#464255] font-semibold">Sales Chart</h3>
              <p className="text-[10px] text-[#464255]">
                The amount of sale per each sale
              </p>
            </div>
            <div className="flex gap-2 items-center border-2 py-2 px-4 rounded-xl border-[#2D9CDB] cursor-pointer">
              <IoArrowDown color="2D9CDB" />
              <button className="text-[#464255] text-[#2D9CDB] cursor-pointer">
                Save Report
              </button>
            </div>
          </div>
          <div className="w-full">
            <LineChart />
          </div>
        </div>
      </div>
      <div className="relative pt-[30px] grid grid-cols-3 gap-4">
        <div className="relative col-span-2 bg-white rounded-xl shadow-lg">
          <div className="absolute text-[#464255] font-bold left-[5%] top-[10%]">
            <p>Total Revenue</p>
          </div>
          <CustomLineChart />
        </div>
        <div className="relative bg-white rounded-xl shadow-lg">
          <div className="z-[9999] w-[90%] absolute flex justify-between text-[#464255] font-bold left-[5%] top-[5%]">
            <div>
              <p>Total Revenue</p>
            </div>
            <div className="flex items-center justify-center gap-2 border-2 border-[#464255] px-4 py-2 rounded-xl cursor-pointer">
              <p className="text-[#464255] text-[10px]">weekly</p>
              <IoMdArrowDropdown color="red" />
            </div>
          </div>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default ChartContainer;
