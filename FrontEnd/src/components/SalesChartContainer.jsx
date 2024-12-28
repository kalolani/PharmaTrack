import PieChartComponent from "./PieChartComponent";
import StockTurnoverBarChart from "./StockTurnoverBarChart";

function SalesChartContainer() {
  const turnoverData = [
    { category: "Antibiotics", turnover: 15 },
    { category: "Painkillers", turnover: 10 },
    { category: "Supplements", turnover: 8 },
    { category: "Cough Syrups", turnover: 12 },
  ];

  const products = [
    { name: "Product A", sales: 120 },
    { name: "Product B", sales: 80 },
    { name: "Product C", sales: 30 },
    { name: "Product D", sales: 200 },
    { name: "Product E", sales: 50 },
  ];

  // Sort products by sales to find top and low sellers
  const sortedProducts = [...products].sort((a, b) => b.sales - a.sales);
  const topSellers = sortedProducts.slice(0, 3); // Top 3 sellers
  const lowSellers = sortedProducts.slice(-3); // Bottom 3 sellers

  return (
    <div className="grid grid-cols-2 items-center gap-32 mt-4 rounded-md w-full m-auto">
      <div className="relative flex rounded-md ">
        <PieChartComponent data={topSellers} title="Top Sellers" />
        <PieChartComponent data={lowSellers} title="Low Sellers" />
      </div>
      <div className="relative ml-6 mr-4 w-[95%] bg-white rounded-md">
        <StockTurnoverBarChart data={turnoverData} />
      </div>
    </div>
  );
}

export default SalesChartContainer;
