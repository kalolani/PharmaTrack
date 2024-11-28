import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
// import DashboardWelcome from "./DashboardWelcome";

function RecordSale() {
  // Demo medicines and cosmetics (mock data)
  const demoItems = [
    { id: 1, name: "Paracetamol", pricePerStrip: 5, pricePerPack: 50 },
    { id: 2, name: "Ibuprofen", pricePerStrip: 7, pricePerPack: 70 },
    { id: 3, name: "Cough Syrup", pricePerBottle: 25, pricePerMl: 0.5 },
    { id: 4, name: "Lip Balm", pricePerItem: 15 },
    { id: 5, name: "Face Cream", pricePerBottle: 40 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [unitType, setUnitType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredItems([]);
    } else {
      const filtered = demoItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm(item.name);
    setFilteredItems([]);
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
    const quantityValue = e.target.value;
    setQuantity(quantityValue);

    if (selectedItem && unitType) {
      let price = 0;

      // Calculate price based on unit type
      if (unitType === "strip")
        price = selectedItem.pricePerStrip * quantityValue;
      if (unitType === "pack")
        price = selectedItem.pricePerPack * quantityValue;
      if (unitType === "bottle")
        price = selectedItem.pricePerBottle * quantityValue;
      if (unitType === "ml") price = selectedItem.pricePerMl * quantityValue;
      if (unitType === "item")
        price = selectedItem.pricePerItem * quantityValue;

      setTotalPrice(price || "");
    }
  };

  return (
    <div className="pt-6 pb-8 px-4 w-[85%] h-full bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      {/* <DashboardWelcome /> */}
      <h1 className="text-3xl font-bold text-[#464255] mb-6 pt-10 text-center font-Poppins">
        Record New Sale
      </h1>
      <div className="bg-white p-6 shadow-md rounded-lg max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 font-Poppins">Add Sale</h2>
        <div className="space-y-4">
          {/* Search Input for Items */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search medicine or cosmetic..."
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
              {selectedItem.pricePerBottle && (
                <option value="bottle">Per Bottle</option>
              )}
              {selectedItem.pricePerMl && <option value="ml">Per mL</option>}
              {selectedItem.pricePerItem && (
                <option value="item">Per Item</option>
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
            value={totalPrice ? `$${totalPrice}` : ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-100 focus:outline-2 outline-[#2D9CDB]"
          />

          {/* Submit Button */}
          <button
            onClick={() => alert("Sale Recorded Successfully!")}
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
