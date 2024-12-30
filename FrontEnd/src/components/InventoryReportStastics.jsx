import { useEffect, useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

import { GiMoneyStack } from "react-icons/gi";
import axios from "axios";

function InventoryReportStastics() {
  const [uniqueItemCount, setUniqueItemCount] = useState(0);
  const [totalStockValue, setTotalStockValue] = useState(0);
  const [expiredItemCount, setExpiredItemCount] = useState(0);
  const [totalStockSold, setTotalStockSold] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch unique item count
        const countResponse = await axios.get(
          "http://localhost:3000/api/inventory/count"
        );
        setUniqueItemCount(countResponse.data.totalUniqueItems);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total stock value
        const valueResponse = await axios.get(
          "http://localhost:3000/api/inventory/stock-value"
        );
        setTotalStockValue(valueResponse.data.totalStockValue);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch medicines

        // Fetch expired items
        const expiredResponse = await axios.get(
          "http://localhost:3000/api/inventory/expired-items"
        );
        setExpiredItemCount(expiredResponse.data.expiredItemCount);
        // setExpiredTotalValue(expiredResponse.data.expiredTotalValue);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/sold-quantity"
        );
        setTotalStockSold(response.data.totalStockSold);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalSales();
  }, []);
  return (
    <div className="relative z-10 grid grid-cols-4 gap-4 pt-[20px]">
      <div className="flex justify-center items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="relative w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <img
            src="/tablet.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-[#464255] text-[12px] font-semibold">
            {uniqueItemCount}
          </p>
          <p className="text-[#464255] text-[12px] font-bold">
            Total Medicines
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
      <div className="flex justify-center items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="relative  w-[70px] h-[70px] rounded-full bg-[#00B074] bg-opacity-[0.15]">
          <GiMoneyStack
            size={40}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[12px] font-semibold">
            {totalStockValue} ETB
          </p>
          <p className="text-[#464255] text-[12px] font-bold">
            Total Stock Value
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
        <div className="relative  w-[70px] h-[70px] rounded-full bg-red-500 bg-opacity-[0.15]">
          <img
            src="/expiry.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#464255] text-[12px] font-semibold">
            {expiredItemCount}
          </p>
          <p className="text-[#464255] text-[12px] font-bold">Expired Items</p>
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
              {totalStockSold}
            </p>
            <div className="flex justify-center items-center gap-2"></div>
          </div>
          <p className="text-[#464255] text-[12px] font-bold">Sold Quantity</p>
        </div>
      </div>
    </div>
  );
}

export default InventoryReportStastics;
