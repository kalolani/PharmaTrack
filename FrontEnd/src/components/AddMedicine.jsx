// Import required modules
import { useState } from "react";
import AdminNavBar from "./AdminNavBar";

const AddMedicine = () => {
  const [medicineDetails, setMedicineDetails] = useState({
    name: "",
    type: "tablet",
    costPerStrip: "",
    costPerPack: "",
    expiryDate: "",
    batchNumber: "",
    manufacturer: "",
    percentageStrip: "",
    percentagePack: "",
    sellingPriceStrip: "",
    sellingPricePack: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicineDetails({
      ...medicineDetails,
      [name]: value,
    });
  };

  const calculateSellingPrices = () => {
    const costPerStrip = parseFloat(medicineDetails.costPerStrip);
    const costPerPack = parseFloat(medicineDetails.costPerPack);
    const percentageStrip = parseFloat(medicineDetails.percentageStrip);
    const percentagePack = parseFloat(medicineDetails.percentagePack);

    let sellingPriceStrip = "";
    let sellingPricePack = "";

    if (!isNaN(costPerStrip) && !isNaN(percentageStrip)) {
      sellingPriceStrip = costPerStrip + (costPerStrip * percentageStrip) / 100;
    }

    if (!isNaN(costPerPack) && !isNaN(percentagePack)) {
      sellingPricePack = costPerPack + (costPerPack * percentagePack) / 100;
    }

    setMedicineDetails((prevDetails) => ({
      ...prevDetails,
      sellingPriceStrip: sellingPriceStrip ? sellingPriceStrip.toFixed(2) : "",
      sellingPricePack: sellingPricePack ? sellingPricePack.toFixed(2) : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend API call to save the medicine details
    console.log(medicineDetails);
  };

  return (
    <div className="p-6 w-[80%] mx-auto bg-gray-100  space-y-4">
      <AdminNavBar />
      <div className="p-6 w-[50%] mt-32 mx-auto bg-white rounded-md shadow-md">
        <h1 className="text-xl font-bold mb-4 text-blue-500 font-Poppins">
          Add Medicine
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Medicine Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={medicineDetails.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Medicine Type
            </label>
            <select
              id="type"
              name="type"
              value={medicineDetails.type}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="tablet">Tablet</option>
              <option value="syrup">Syrup</option>
              <option value="cosmetics">Cosmetics</option>
              <option value="others">Others</option>
            </select>
          </div>

          {medicineDetails.type === "tablet" && (
            <>
              <div>
                <label
                  htmlFor="costPerStrip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cost per Strip
                </label>
                <input
                  type="number"
                  id="costPerStrip"
                  name="costPerStrip"
                  value={medicineDetails.costPerStrip}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="costPerPack"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cost per Pack
                </label>
                <input
                  type="number"
                  id="costPerPack"
                  name="costPerPack"
                  value={medicineDetails.costPerPack}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="percentageStrip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Markup Percentage for Strip Selling Price
                </label>
                <input
                  type="number"
                  id="percentageStrip"
                  name="percentageStrip"
                  value={medicineDetails.percentageStrip}
                  onChange={handleInputChange}
                  onBlur={calculateSellingPrices}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="percentagePack"
                  className="block text-sm font-medium text-gray-700"
                >
                  Markup Percentage for Pack Selling Price
                </label>
                <input
                  type="number"
                  id="percentagePack"
                  name="percentagePack"
                  value={medicineDetails.percentagePack}
                  onChange={handleInputChange}
                  onBlur={calculateSellingPrices}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sellingPriceStrip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling Price per Strip
                </label>
                <input
                  type="text"
                  id="sellingPriceStrip"
                  name="sellingPriceStrip"
                  value={medicineDetails.sellingPriceStrip}
                  readOnly
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="sellingPricePack"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling Price per Pack
                </label>
                <input
                  type="text"
                  id="sellingPricePack"
                  name="sellingPricePack"
                  value={medicineDetails.sellingPricePack}
                  readOnly
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {medicineDetails.type !== "tablet" && (
            <div>
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-gray-700"
              >
                Cost (
                {medicineDetails.type === "syrup" ? "per bottle" : "per unit"})
              </label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={medicineDetails.cost}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={medicineDetails.expiryDate}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="batchNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Batch Number
            </label>
            <input
              type="text"
              id="batchNumber"
              name="batchNumber"
              value={medicineDetails.batchNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="manufacturer"
              className="block text-sm font-medium text-gray-700"
            >
              Manufacturer
            </label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              value={medicineDetails.manufacturer}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
