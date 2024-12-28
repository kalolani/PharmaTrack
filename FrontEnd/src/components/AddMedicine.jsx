// Import required modules
import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    percentageBottle: "",
    percentageCosmetics: "",
    percetageUnit: "",
    sellingPriceBottle: "",
    sellingPriceCosmetics: "",
    sellingPriceStrip: "",
    sellingPricePack: "",
    packQuantity: "",
    stripQuantity: "",
    stripPerPack: "",
    unitQuantity: "",
    bottleQuantity: "",
    bottleCost: "",
    cosmeticsCost: "",
  });
  console.log(medicineDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicineDetails((prevDetails) => {
      const updatedDetails = {
        ...prevDetails,
        [name]: value,
      };

      // Calculate strip quantity if relevant inputs are updated
      if (name === "packQuantity" || name === "stripPerPack") {
        const packQuantity = parseInt(updatedDetails.packQuantity) || 0;
        const stripPerPack = parseInt(updatedDetails.stripPerPack) || 0;
        updatedDetails.stripQuantity = packQuantity * stripPerPack;
      }

      return updatedDetails;
    });
  };

  const calculateSellingPrices = () => {
    const costPerStrip = parseFloat(medicineDetails.costPerStrip);
    const costPerPack = parseFloat(medicineDetails.costPerPack);
    const percentageStrip = parseFloat(medicineDetails.percentageStrip);
    const percentagePack = parseFloat(medicineDetails.percentagePack);
    const bottleCost = parseFloat(medicineDetails.bottleCost);
    const percentageBottle = parseFloat(medicineDetails.percentageBottle);
    const cosmeticsCost = parseFloat(medicineDetails.cosmeticsCost);
    const percentageCosmetics = parseFloat(medicineDetails.percentageCosmetics);

    let sellingPriceStrip = "";
    let sellingPricePack = "";
    let sellingPriceBottle = "";
    let sellingPriceCosmetics = "";

    if (!isNaN(costPerStrip) && !isNaN(percentageStrip)) {
      sellingPriceStrip = costPerStrip + (costPerStrip * percentageStrip) / 100;
    }

    if (!isNaN(costPerPack) && !isNaN(percentagePack)) {
      sellingPricePack = costPerPack + (costPerPack * percentagePack) / 100;
    }
    if (!isNaN(bottleCost) && !isNaN(percentageBottle)) {
      sellingPriceBottle = bottleCost + (bottleCost * percentageBottle) / 100;
    }
    if (!isNaN(cosmeticsCost) && !isNaN(percentageCosmetics)) {
      sellingPriceCosmetics =
        cosmeticsCost + (cosmeticsCost * percentageCosmetics) / 100;
    }

    setMedicineDetails((prevDetails) => ({
      ...prevDetails,
      sellingPriceStrip: sellingPriceStrip ? sellingPriceStrip.toFixed(2) : "",
      sellingPricePack: sellingPricePack ? sellingPricePack.toFixed(2) : "",
      sellingPriceBottle: sellingPriceBottle
        ? sellingPriceBottle.toFixed(2)
        : "",
      sellingPriceCosmetics: sellingPriceCosmetics
        ? sellingPriceCosmetics.toFixed(2)
        : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/inventory/add-medicine",
        medicineDetails
      );
      console.log("Medicine registered successfully:", response.data);
      if (response.status === 201) {
        toast.success("Medicine added successfully!");
        setMedicineDetails({
          name: "",
          type: "tablet",
          costPerStrip: "",
          costPerPack: "",
          expiryDate: "",
          batchNumber: "",
          manufacturer: "",
          percentageStrip: "",
          percentagePack: "",
          percentageBottle: "",
          percentageCosmetics: "",
          percentageUnit: "",
          sellingPriceBottle: "",
          sellingPriceCosmetics: "",
          sellingPriceStrip: "",
          sellingPricePack: "",
          packQuantity: "",
          stripQuantity: "",
          stripPerPack: "",
          unitQuantity: "",
          bottleQuantity: "",
          bottleCost: "",
          cosmeticsCost: "",
        });
        console.log("Medicine registered successfully:", response.data);
      } else {
        // If status is not what you expect
        toast.warning(
          "Unexpected response from the server. Please check again."
        );
        console.warn("Unexpected status:", response.status);
      }
    } catch (error) {
      toast.error(
        `Error adding medicine: ${
          error.response?.data?.message || error.message
        }`
      );
      console.error(
        "Error registering medicine:",
        error.response?.data || error.message
      );
    }
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
                  htmlFor="packQuantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  pack quantity
                </label>
                <input
                  type="packQuantity"
                  id="packQuantity"
                  name="packQuantity"
                  value={medicineDetails.packQuantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="stripPerPack"
                  className="block text-sm font-medium text-gray-700"
                >
                  strip per pack
                </label>
                <input
                  type="stripPerPack"
                  id="stripPerPack"
                  name="stripPerPack"
                  value={medicineDetails.stripPerPack}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="stripQuantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  strip quantity
                </label>
                <input
                  type="stripQuantity"
                  id="stripQuantity"
                  name="stripQuantity"
                  value={medicineDetails.stripQuantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
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

          {medicineDetails.type === "syrup" && (
            <>
              <div>
                <label
                  htmlFor="bottleQuantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  bottle quantity
                </label>
                <input
                  type="number"
                  id="bottleQuantity"
                  name="bottleQuantity"
                  value={medicineDetails.bottleQuantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="bottleCost"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cost (per bottle)
                </label>
                <input
                  type="number"
                  id="bottleCost"
                  name="bottleCost"
                  value={medicineDetails.bottleCost}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="percentageBottle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Markup Percentage for Selling Price
                </label>
                <input
                  type="number"
                  id="percentageBottle"
                  name="percentageBottle"
                  value={medicineDetails.percentageBottle}
                  onChange={handleInputChange}
                  onBlur={calculateSellingPrices}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sellingPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling Price
                </label>
                <input
                  type="text"
                  id="sellingPrice"
                  name="sellingPrice"
                  value={medicineDetails.sellingPriceBottle}
                  readOnly
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
          {medicineDetails.type === "cosmetics" && (
            <>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={medicineDetails.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="cosmeticsCost"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cost
                </label>
                <input
                  type="number"
                  id="cosmeticsCost"
                  name="cosmeticsCost"
                  value={medicineDetails.cosmeticsCost}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="percentageCosmetics"
                  className="block text-sm font-medium text-gray-700"
                >
                  Markup Percentage for Selling Price
                </label>
                <input
                  type="number"
                  id="percentageCosmetics"
                  name="percentageCosmetics"
                  value={medicineDetails.percentageCosmetics}
                  onChange={handleInputChange}
                  onBlur={calculateSellingPrices}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sellingPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling Price
                </label>
                <input
                  type="text"
                  id="sellingPrice"
                  name="sellingPrice"
                  value={medicineDetails.sellingPriceCosmetics}
                  readOnly
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
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
