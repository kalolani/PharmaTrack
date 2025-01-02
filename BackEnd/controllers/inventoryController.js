import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

// Controller function to register medicine details
const addMedicine = async (req, res) => {
  try {
    const {
      name,
      type,
      costPerStrip,
      costPerPack,
      expiryDate,
      batchNumber,
      manufacturer,
      percentageStrip,
      percentagePack,
      percentageBottle,
      percentageCosmetics,
      percentageUnit,
      sellingPriceBottle,
      sellingPriceCosmetics,
      sellingPriceStrip,
      sellingPricePack,
      packQuantity,
      stripQuantity,
      stripPerPack,
      unitQuantity,
      bottleQuantity,
      bottleCost,
      cosmeticsCost,
    } = req.body;

    // Validate the input data (example: ensure all required fields are provided)
    if (!name || !type || !expiryDate || !batchNumber || !manufacturer) {
      return res
        .status(400)
        .json({ message: "Some required fields are missing" });
    }

    // Check if the medicine already exists in the stock by name and batch number (or other identifiers)
    const existingMedicine = await prisma.medicine.findFirst({
      where: {
        name,
        batchNumber, // Or add other unique fields for identification
      },
    });

    if (existingMedicine) {
      return res.status(400).json({
        message: "This medicine is already found in the stock.",
      });
    }

    // If not found, create a new medicine record
    const newMedicine = await prisma.medicine.create({
      data: {
        name,
        type,
        costPerStrip: parseFloat(costPerStrip),
        costPerPack: parseFloat(costPerPack),
        expiryDate: new Date(expiryDate),
        batchNumber,
        manufacturer,
        percentageStrip: parseFloat(percentageStrip),
        percentagePack: parseFloat(percentagePack),
        percentageBottle: parseFloat(percentageBottle),
        percentageCosmetics: parseFloat(percentageCosmetics),
        percentageUnit: parseFloat(percentageUnit),
        sellingPriceBottle: parseFloat(sellingPriceBottle),
        sellingPriceCosmetics: parseFloat(sellingPriceCosmetics),
        sellingPriceStrip: parseFloat(sellingPriceStrip),
        sellingPricePack: parseFloat(sellingPricePack),
        packQuantity: parseInt(packQuantity),
        stripQuantity: parseInt(stripQuantity),
        stripPerPack: parseInt(stripPerPack),
        unitQuantity: parseInt(unitQuantity),
        bottleQuantity: parseInt(bottleQuantity),
        bottleCost: parseFloat(bottleCost),
        cosmeticsCost: parseFloat(cosmeticsCost),
      },
    });

    return res.status(201).json({
      message: "Medicine added successfully",
      medicine: newMedicine,
    });
  } catch (error) {
    console.error("Error registering medicine detail:", error);
    return res
      .status(500)
      .json({ message: "Server error, please try again later" });
  }
};

// List all medicines
const getAllMedicines = async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany(); // Fetch all records from the medicine table
    res.status(200).json(medicines);
  } catch (error) {
    console.error("Error fetching medicines:", error);
    res.status(500).json({ message: "Failed to fetch medicines" });
  }
};

const inventoryList = async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany();

    const result = medicines.map((medicine) => {
      let stockLevel = 0;
      let totalValue = 0;

      // Determine stock level and total value based on medicine type
      if (medicine.type === "tablet") {
        stockLevel = medicine.stripQuantity || 0;
        totalValue =
          (medicine.stripQuantity || 0) * (medicine.costPerStrip || 0);
      } else if (medicine.type === "syrup") {
        stockLevel = medicine.bottleQuantity || 0;
        totalValue =
          (medicine.bottleQuantity || 0) * (medicine.bottleCost || 0);
      } else if (medicine.type === "cosmetics") {
        stockLevel = medicine.unitQuantity || 0;
        totalValue =
          (medicine.unitQuantity || 0) * (medicine.cosmeticsCost || 0);
      } else if (medicine.type === "pack") {
        stockLevel = medicine.packQuantity || 0;
        totalValue = (medicine.packQuantity || 0) * (medicine.costPerPack || 0);
      }

      // Determine status
      let status = "In Stock";
      const LOW_STOCK_THRESHOLD = 10; // Customize this value per type if needed
      if (stockLevel <= LOW_STOCK_THRESHOLD && stockLevel > 0) {
        status = "Low Stock";
      } else if (stockLevel === 0) {
        status = "Out of Stock";
      }

      return {
        id: medicine.id,
        name: medicine.name,
        type: medicine.type,
        stockLevel,
        costPerUnit:
          medicine.type === "tablet"
            ? medicine.costPerStrip
            : medicine.type === "syrup"
            ? medicine.bottleCost
            : medicine.type === "cosmetics"
            ? medicine.cosmeticsCost
            : medicine.costPerPack,
        totalValue,
        expiryDate: medicine.expiryDate,
        status,
        manufacturer: medicine.manufacturer,
        batchNumber: medicine.batchNumber,
      };
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching medicines");
  }
};

const inventoryCount = async (req, res) => {
  try {
    const uniqueItemCount = await prisma.medicine.count();
    res.json({ totalUniqueItems: uniqueItemCount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching unique item count");
  }
};

//total stock value
const totalStockValue = async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany();

    const totalStockValue = medicines.reduce((total, medicine) => {
      let itemValue = 0;

      switch (medicine.type) {
        case "tablet":
          itemValue =
            (medicine.stripQuantity || 0) * (medicine.costPerStrip || 0);
          break;
        case "syrup":
          itemValue =
            (medicine.bottleQuantity || 0) * (medicine.bottleCost || 0);
          break;
        case "cosmetics":
          itemValue =
            (medicine.unitQuantity || 0) * (medicine.cosmeticsCost || 0);
          break;
        case "other":
          itemValue =
            (medicine.unitQuantity || 0) * (medicine.cosmeticsCost || 0); // Default for other types
          break;
      }

      return total + itemValue;
    }, 0);

    res.json({ totalStockValue });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error calculating total stock value");
  }
};

const expiredItems = async (req, res) => {
  try {
    const currentDate = new Date();

    // Fetch all expired medicines
    const expiredMedicines = await prisma.medicine.findMany({
      where: {
        expiryDate: {
          lt: currentDate, // Expiry date is less than current date
        },
      },
    });

    // Calculate the total value and count of expired items
    const { totalValue, count } = expiredMedicines.reduce(
      (acc, medicine) => {
        let itemValue = 0;

        switch (medicine.type) {
          case "tablet":
            itemValue =
              (medicine.stripQuantity || 0) * (medicine.costPerStrip || 0);
            break;
          case "syrup":
            itemValue =
              (medicine.bottleQuantity || 0) * (medicine.bottleCost || 0);
            break;
          case "cosmetics":
            itemValue =
              (medicine.unitQuantity || 0) * (medicine.cosmeticsCost || 0);
            break;
          case "other":
            itemValue =
              (medicine.unitQuantity || 0) * (medicine.cosmeticsCost || 0); // Default for "other" types
            break;
        }

        return {
          totalValue: acc.totalValue + itemValue,
          count: acc.count + 1,
        };
      },
      { totalValue: 0, count: 0 }
    );

    res.json({ expiredItemCount: count, expiredTotalValue: totalValue });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching expired items");
  }
};

//search for medicine by name
// Search for medicine by name
const searchMedicineByName = async (req, res) => {
  const { name } = req.params;

  try {
    const medicine = await prisma.medicine.findFirst({
      where: { name },
    });

    if (medicine) {
      return res.status(200).json(medicine);
    } else {
      return res.status(404).json({ message: "Medicine not found" });
    }
  } catch (error) {
    console.error("Error searching for medicine:", error);
    return res.status(500).json({ message: "Error searching for medicine" });
  }
};

//sarch for medicines
const searchMedicines = async (req, res) => {
  const { q } = req.query;
  if (!q)
    return res.status(400).json({ error: "Query parameter 'q' is required." });

  try {
    const medicines = await prisma.medicine.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
    });
    res.json(medicines);
  } catch (error) {
    console.error("Error fetching medicines:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

//delete medicine
const deleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMedicine = await prisma.medicine.delete({
      where: { id: parseInt(id) },
    });

    if (!deletedMedicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.status(200).json({ message: "Medicine deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const lowStock = async (req, res) => {
  try {
    // Fetch medicines with conditional low stock criteria based on type
    const lowStockMedicines = await prisma.medicine.findMany({
      where: {
        OR: [
          {
            type: "tablet",
            packQuantity: {
              lt: 5, // Low stock threshold for tablets
            },
          },
          {
            type: "syrup",
            bottleQuantity: {
              lt: 5, // Low stock threshold for syrups
            },
          },
          {
            type: "cosmetics",
            unitQuantity: {
              lt: 5, // Low stock threshold for cosmetics
            },
          },
          {
            type: "other",
            unitQuantity: {
              lt: 5, // Low stock threshold for other types
            },
          },
        ],
      },
    });

    res.status(200).json(lowStockMedicines);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const expiredMedicines = async (req, res) => {
  try {
    const today = new Date();
    const expiredMedicines = await prisma.medicine.findMany({
      where: {
        expiryDate: {
          lt: today,
        },
      },
    });
    res.json(expiredMedicines);
  } catch (error) {
    console.error("Error fetching expired medicines:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getTotalMedicinesCount = async (req, res) => {
  try {
    // Fetch the count of all medicines
    const totalMedicines = await prisma.medicine.count();

    res.json({ totalMedicines });
  } catch (error) {
    console.error("Error fetching total medicines count:", error);
    res.status(500).json({ error: "Failed to fetch total medicines count" });
  }
};

const getSpecificMedicine = async (req, res) => {
  const { id } = req.params;

  try {
    const medicine = await prisma.medicine.findUnique({
      where: { id: parseInt(id) },
    });

    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.status(200).json(medicine);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching medicine", error: error.message });
  }
};

const updateMedicine = async (req, res) => {
  const { id } = req.params;
  const { name, type, stock, cost, expiryDate } = req.body;

  try {
    const updatedMedicine = await prisma.medicine.update({
      where: { id: parseInt(id) },
      data: {
        name,
        type,
        stock: parseInt(stock),
        cost: parseFloat(cost),
        expiryDate: new Date(expiryDate),
      },
    });

    res.status(200).json(updatedMedicine);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating medicine", error: error.message });
  }
};

export {
  addMedicine,
  getAllMedicines,
  deleteMedicine,
  lowStock,
  expiredMedicines,
  searchMedicines,
  searchMedicineByName,
  getTotalMedicinesCount,
  inventoryList,
  inventoryCount,
  totalStockValue,
  expiredItems,
  getSpecificMedicine,
  updateMedicine,
};
