import { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavbar";
import axios from "axios";
import { toast } from "react-toastify";

function RecordSale() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [unitType, setUnitType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [notFound, setNotFound] = useState(false);
  console.log(totalPrice);
  console.log(filteredItems);

  const fetchMedicines = async (term) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/inventory/search?q=${term}`
      );
      const data = response.data || [];
      setFilteredItems(data);
      setNotFound(data.length === 0);
    } catch (error) {
      console.error("Error fetching medicines:", error);
      alert("Failed to fetch medicines. Please try again.");
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredItems([]);
      setNotFound(false);
    } else {
      fetchMedicines(searchTerm);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm(item.name);
    setFilteredItems([]);
    setNotFound(false);
    setUnitType("");
    setQuantity("");
    setTotalPrice("");
  };

  const handleUnitTypeChange = (e) => {
    setUnitType(e.target.value);
    setQuantity("");
    setTotalPrice("");
  };

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0) {
      alert("Quantity must be a positive number.");
      return;
    }
    setQuantity(value);

    // Automatically calculate total price based on unit type
    if (unitType && selectedItem) {
      let price = 0;
      if (unitType === "strip") price = selectedItem.sellingPriceStrip;
      else if (unitType === "pack") price = selectedItem.sellingPricePack;
      else if (unitType === "bottle") price = selectedItem.sellingPriceBottle;
      else if (unitType === "unit") price = selectedItem.sellingPriceCosmetics;

      setTotalPrice(price * value);
    }
  };

  const handleSaleSubmit = async () => {
    if (!selectedItem || !unitType || !quantity || !totalPrice) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const saleData = {
        medicineId: selectedItem.id,
        medicineName: selectedItem.name,
        quantity,
        unitType,
        totalPrice,
      };

      console.log(saleData);

      const response = await axios.post(
        "http://localhost:3000/api/sales/record-sale",
        saleData
      );
      if (response.status === 201) {
        toast.success("Sale recorded successfully!");
      }
      setSearchTerm("");
      setSelectedItem(null);
      setUnitType("");
      setQuantity("");
      setTotalPrice("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Check if the error message is about insufficient stock
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="pt-6 pb-8 px-4 w-[85%] h-full bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />
      <h1 className="text-3xl font-bold text-[#464255] mb-6 pt-10 text-center font-Poppins">
        Record New Sale
      </h1>
      <div className="relative z-10 bg-white p-6 shadow-md rounded-lg max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 font-Poppins">Add Sale</h2>
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search medicine..."
              className="w-full border p-2 rounded focus:outline-2 outline-[#2D9CDB]"
            />
            {filteredItems.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 max-h-40 overflow-y-auto rounded-lg">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
            {notFound && (
              <p className="text-red-500 mt-2">Medicine not found.</p>
            )}
          </div>

          {/* Unit Type Dropdown */}
          {selectedItem && (
            <select
              value={unitType}
              onChange={handleUnitTypeChange}
              className="w-full border p-2 rounded focus:outline-2 outline-[#2D9CDB]"
            >
              <option value="">Select Unit</option>
              {selectedItem.type === "tablet" && (
                <>
                  <option value="strip">Strip</option>
                  <option value="pack">Pack</option>
                </>
              )}
              {selectedItem.type === "syrup" && (
                <option value="bottle">Bottle</option>
              )}
              {["cosmetics", "other"].includes(selectedItem.type) && (
                <option value="unit">Unit</option>
              )}
            </select>
          )}

          {/* Quantity Input */}
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full border p-2 rounded focus:outline-2 outline-[#2D9CDB]"
            disabled={!unitType}
          />

          {/* Total Price Display */}
          <input
            type="text"
            placeholder="Total Price"
            value={totalPrice}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />

          {/* Submit Button */}
          <button
            onClick={handleSaleSubmit}
            className="w-full bg-[#2D9CDB] text-white py-2 rounded hover:bg-blue-600 font-Poppins"
          >
            Record Sale
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordSale;
