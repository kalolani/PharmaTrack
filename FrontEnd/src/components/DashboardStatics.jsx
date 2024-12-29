import { useEffect, useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import axios from "axios";

function DashboardStatics() {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalUnitsSold, setTotalUnitsSold] = useState(null);
  const [totalMedicines, setTotalMedicines] = useState(null);
  const [salesGrowth, setSalesGrowth] = useState([]);

  useEffect(() => {
    const fetchTotalRevenue = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/system-total-revenue"
        );
        // console.log(response);
        setTotalRevenue(response.data.systemTotalRevenue);
      } catch (error) {
        console.error("Error fetching total revenue:", error);
      }
    };

    fetchTotalRevenue();
  }, []);

  useEffect(() => {
    const fetchTotalUnitsSold = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/total-units-sold"
        );
        setTotalUnitsSold(response.data.totalUnitsSold);
      } catch (error) {
        console.error("Error fetching total units sold:", error);
      }
    };

    fetchTotalUnitsSold();
  }, []);

  useEffect(() => {
    const fetchTotalMedicines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/inventory/total-medicines"
        );

        setTotalMedicines(response.data.totalMedicines);
      } catch (error) {
        console.error("Error fetching total medicines count:", error);
      }
    };

    fetchTotalMedicines();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/sales/sales-growth") // Backend endpoint
      .then((response) => {
        console.log(response);
        setSalesGrowth(response.data.growthRate);
      })
      .catch((err) => {
        console.error("Error fetching sales growth data:", err);
      });
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
          <p className="text-[#464255] text-[12px] font-semibold">
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
          <p className="text-[#464255] text-[12px] font-semibold">
            {totalUnitsSold}
          </p>
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
          <p className="text-[#464255] text-[12px] font-semibold">
            {totalMedicines}
          </p>
          <p className="text-[#464255] text-[12px] font-bold">Total Product</p>
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
          <div className="flex items-center gap-2">
            <p className="text-[#464255] text-[12px] font-semibold">
              {salesGrowth}
            </p>
            <div className="flex justify-center items-center gap-2">
              {salesGrowth > 0 ? (
                <IoArrowUpCircleOutline
                  size={20}
                  color={`${salesGrowth > 0 ? "#00A389" : "red"}`}
                  className={` p-[2px] rounded-xl ${
                    salesGrowth > 0
                      ? "bg-[#00A389] bg-opacity-[0.15]"
                      : "bg-red-500 bg-opacity-[0.15]"
                  }`}
                />
              ) : (
                <IoArrowDownCircleOutline
                  size={20}
                  color={`${salesGrowth > 0 ? "#00A389" : "red"}`}
                  className={` p-[2px] rounded-xl ${
                    salesGrowth > 0
                      ? "bg-[#00A389] bg-opacity-[0.15]"
                      : "bg-red-500 bg-opacity-[0.15]"
                  }`}
                />
              )}
            </div>
          </div>
          <p className="text-[#464255] text-[12px] font-bold">Sales Growth</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardStatics;
