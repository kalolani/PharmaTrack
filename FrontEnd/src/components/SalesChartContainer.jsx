import PieChartComponent from "./PieChartComponent";
import StockTurnoverBarChart from "./StockTurnoverBarChart";

function SalesChartContainer() {
  const turnoverData = [
    { product: "Paracetamol", turnoverRate: 10 },
    { product: "Vitamin C", turnoverRate: 2 },
    { product: "Antibiotic XYZ", turnoverRate: 0.5 },
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
    <div className="grid grid-cols-2 items-center gap-32 mt-10 px-2 rounded-md m-auto">
      <div className="relative flex w-[30%] rounded-md">
        <PieChartComponent data={topSellers} title="Top Sellers" />
        <PieChartComponent data={lowSellers} title="Low Sellers" />
      </div>
      <div className="relative ml-6 mr-4 w-full bg-white rounded-md">
        <StockTurnoverBarChart data={turnoverData} />
      </div>
    </div>
  );
}

export default SalesChartContainer;
