import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";

function AddMedicine() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    quantity: "",
    manufacturer: "",
    expiryDate: "",
    batchNumber: "",
    pricePerStrip: "",
    pricePerPack: "",
    pricePerUnit: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/inventory/add-medicine",
        formData
      );
      console.log("Medicine added successfully:", response.data);
      alert("Medicine added successfully!");
      setFormData({
        name: "",
        type: "",
        quantity: "",
        manufacturer: "",
        expiryDate: "",
        batchNumber: "",
        pricePerStrip: "",
        pricePerPack: "",
        priceUnit: "",
        description: "",
      });
    } catch (error) {
      console.error(
        "Error adding medicine:",
        error.response?.data || error.message
      );
      alert("Failed to add medicine. Please try again.");
    }
  };
  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />

      <div className="relative max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
        <h2 className="font-Poppins text-xl font-semibold text-gray-800 mb-8">
          Add New Medicine
        </h2>
        <div className="absolute left-0 top-[10%] w-full h-[2px] bg-gray-300"></div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Medicine Name */}
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Medicine Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter medicine name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-gray-600 font-medium mb-2"
            >
              Medicine Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) => {
                const selectedType = e.target.value;
                setFormData({
                  ...formData,
                  type: selectedType,
                  priceUnit: selectedType === "Tablet" ? "" : "Per Item", // Reset or set default unit
                  pricePerUnit: "", // Clear the price when type changes
                });
              }}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
              required
            >
              <option value="">Select Type</option>
              <option value="Tablet">Tablet</option>
              <option value="Syrup">Syrup</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Price and Unit Fields */}
          {/* Price and Unit Fields */}
          {formData.type && (
            <div>
              <label
                htmlFor="pricePerUnit"
                className="block text-gray-600 font-medium mb-2"
              >
                {formData.type === "Tablet"
                  ? "Price Per Strip and Per Pack"
                  : `Price (${
                      formData.type === "Syrup" ? "Per Bottle" : "Per Item"
                    })`}
              </label>

              {formData.type === "Tablet" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Price Per Strip */}
                  <input
                    type="number"
                    id="pricePerStrip"
                    name="pricePerStrip"
                    placeholder="Enter price per strip"
                    value={formData.pricePerStrip || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pricePerStrip: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
                    required
                  />

                  {/* Price Per Pack */}
                  <input
                    type="number"
                    id="pricePerPack"
                    name="pricePerPack"
                    placeholder="Enter price per pack"
                    value={formData.pricePerPack || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, pricePerPack: e.target.value })
                    }
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
                    required
                  />
                </div>
              ) : (
                // Price for other types
                <input
                  type="number"
                  id="pricePerUnit"
                  name="pricePerUnit"
                  placeholder={`Enter price ${
                    formData.type === "Syrup"
                      ? "(e.g., per bottle)"
                      : "(e.g., per item)"
                  }`}
                  value={formData.pricePerUnit || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, pricePerUnit: e.target.value })
                  }
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
                  required
                />
              )}
            </div>
          )}

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-600 font-medium mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
              required
            />
          </div>

          {/* Manufacturer */}
          <div>
            <label
              htmlFor="manufacturer"
              className="block text-gray-600 font-medium mb-2"
            >
              Manufacturer
            </label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              placeholder="Enter manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-gray-600 font-medium mb-2"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
              required
            />
          </div>

          {/* Batch Number */}
          <div>
            <label
              htmlFor="batchNumber"
              className="block text-gray-600 font-medium mb-2"
            >
              Batch Number
            </label>
            <input
              type="text"
              id="batchNumber"
              name="batchNumber"
              placeholder="Enter batch number"
              value={formData.batchNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-2"
            >
              Description (optional)
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-[#2D9CDB] text-white py-3 rounded hover:bg-[#217AB3] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMedicine;
