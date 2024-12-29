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

export {
  addMedicine,
  getAllMedicines,
  deleteMedicine,
  lowStock,
  expiredMedicines,
  searchMedicines,
  searchMedicineByName,
  getTotalMedicinesCount,
};
