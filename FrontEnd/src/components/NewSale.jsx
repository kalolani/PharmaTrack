import { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";

function RecordSale() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [unitType, setUnitType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [notFound, setNotFound] = useState(false);

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
    setsellingPrice("");
  };

  const handleUnitTypeChange = (e) => {
    setUnitType(e.target.value);
    setQuantity("");
  };

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0) {
      alert("Quantity must be a positive number.");
      return;
    }
    setQuantity(value);
  };

  const handlePriceChange = (e) => setsellingPrice(e.target.value);

  const handleSaleSubmit = async () => {
    if (!selectedItem || !unitType || !quantity || !sellingPrice) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const saleData = {
        medicineId: selectedItem.id,
        medicineName: selectedItem.name,
        quantity:
          unitType === "strip"
            ? { stripQuantity: quantity }
            : { packQuantity: quantity },
        unitType,
        sellingPrice: parseFloat(sellingPrice),
      };

      await axios.post("http://localhost:3000/api/sales/record-sale", saleData);
      alert("Sale recorded successfully!");
      setSearchTerm("");
      setSelectedItem(null);
      setUnitType("");
      setQuantity("");
      setsellingPrice("");
    } catch (error) {
      console.error("Error recording sale:", error);
      alert("Failed to record sale. Please try again.");
    }
  };

  return (
    <div className="pt-6 pb-8 px-4 w-[85%] h-full bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <h1 className="text-3xl font-bold text-[#464255] mb-6 pt-10 text-center font-Poppins">
        Record New Sale
      </h1>
      <div className="bg-white p-6 shadow-md rounded-lg max-w-xl mx-auto">
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
              {selectedItem.pricePerStrip && (
                <option value="strip">Per Strip</option>
              )}
              {selectedItem.pricePerPack && (
                <option value="pack">Per Pack</option>
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

          {/* Total Price Input */}
          <input
            type="text"
            placeholder="Total Price"
            value={sellingPrice}
            onChange={handlePriceChange}
            className="w-full border p-2 rounded focus:outline-2 outline-[#2D9CDB]"
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
