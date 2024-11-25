import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
// import DashboardWelcome from "./DashboardWelcome";

function AddMedicine() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    quantity: "",
    manufacturer: "",
    expiryDate: "",
    batchNumber: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Medicine Data:", formData);
    // Add your Axios or fetch POST request here
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      {/* <DashboardWelcome /> */}

      {/* Add Medicine Form */}
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

          {/* Medicine Type */}
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="type"
              className="block text-gray-600 font-medium mb-2"
            >
              Medicine Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="e.g., Tablet, Syrup"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
              required
            />
          </div>

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

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-gray-600 font-medium mb-2"
            >
              Price per Unit
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              value={formData.price}
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
