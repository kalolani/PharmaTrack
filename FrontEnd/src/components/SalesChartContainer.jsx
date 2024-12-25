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
    <div className="relative grid-cols-2 mt-10 py-2 px-4 rounded-md">
      <div className="absolute left-2 flex">
        <PieChartComponent data={topSellers} title="Top Sellers" />
        <PieChartComponent data={lowSellers} title="Low Sellers" />
      </div>
      <div className="absolute right-2">
        <StockTurnoverBarChart data={turnoverData} />
      </div>
    </div>
  );
}

export default SalesChartContainer;
