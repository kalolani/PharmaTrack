import HighLowSeller from "./HighLowSeller";
import StockTurnoverBarChart from "./StockTurnoverBarChart";

function SalesChartContainer() {
  const turnoverData = [
    { category: "Antibiotics", turnover: 15 },
    { category: "Painkillers", turnover: 10 },
    { category: "Supplements", turnover: 8 },
    { category: "Cough Syrups", turnover: 12 },
  ];

  return (
    <div className="grid grid-cols-2 items-center gap-32 mt-4 rounded-md w-full m-auto">
      <div className="relative flex rounded-md ">
        <HighLowSeller />
      </div>
      <div className="relative ml-6 mr-4 w-[95%] bg-white rounded-md shadow-md">
        <StockTurnoverBarChart data={turnoverData} />
      </div>
    </div>
  );
}

export default SalesChartContainer;
