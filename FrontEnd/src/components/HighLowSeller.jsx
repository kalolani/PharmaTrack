import { useEffect, useState } from "react";
import PieChartComponent from "./PieChartComponent";
import axios from "axios";

const HighLowSeller = () => {
  const [highSellerData, setHighSellerData] = useState([]);
  const [lowSellerData, setLowSellerData] = useState([]);
  const colors = ["#84CC16", "#FACC15", "#22D3EE"];

  useEffect(() => {
    const fetchHighLowSellers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/high-low-sellers"
        );
        console.log(response);

        const { topHighSellers, topLowSellers } = response.data;

        // Format the high sellers data
        const highSellerFormattedData = topHighSellers.map((item) => ({
          name: item.name,
          sales: item.quantitySold, // Use quantitySold for Pie chart
        }));

        // Format the low sellers data
        const lowSellerFormattedData = topLowSellers.map((item) => ({
          name: item.name,
          sales: item.quantitySold, // Use quantitySold for Pie chart
        }));

        // Set the state for both high and low sellers
        setHighSellerData(highSellerFormattedData);
        setLowSellerData(lowSellerFormattedData);
      } catch (error) {
        console.error("Error fetching high and low sellers:", error);
      }
    };

    fetchHighLowSellers();
  }, []);

  return (
    <div className="relative flex rounded-md shadow-md">
      <PieChartComponent
        data={highSellerData}
        colors={colors}
        title="Low Sellers"
      />
      <PieChartComponent
        data={lowSellerData}
        colors={colors}
        title="Low Sellers"
      />
    </div>
  );
};

export default HighLowSeller;
