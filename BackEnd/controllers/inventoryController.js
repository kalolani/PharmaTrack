import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

// POST route to add a new medicine
const addMedicine = async (req, res) => {
  try {
    const {
      name,
      type,
      packQuantity,
      manufacturer,
      expiryDate,
      batchNumber,
      pricePerStrip,
      stripsPerPack,
      pricePerPack,
      pricePerUnit,
      description,
      cost,
    } = req.body;

    // Validate input data
    if (
      !name ||
      !type ||
      !packQuantity ||
      !manufacturer ||
      !expiryDate ||
      !batchNumber ||
      !cost
    ) {
      return res
        .status(400)
        .json({ message: "All fields except description are required" });
    }

    // Conditional validation based on the type
    if (type.toLowerCase() === "tablet") {
      if (!pricePerStrip || !packQuantity) {
        return res.status(400).json({
          message: "For tablets, pricePerStrip and pricePerPack are required.",
        });
      }
    } else if (type.toLowerCase() === "cosmetics") {
      if (!pricePerUnit) {
        return res.status(400).json({
          message: "For cosmetics, pricePerUnit is required.",
        });
      }
    } else {
      return res.status(400).json({ message: "Invalid medicine type." });
    }

    // Save to database
    const newMedicine = await prisma.medicine.create({
      data: {
        name,
        type,
        packQuantity: parseInt(packQuantity),
        manufacturer,
        expiryDate: new Date(expiryDate),
        batchNumber,
        pricePerStrip: pricePerStrip ? parseFloat(pricePerStrip) : null,
        pricePerPack: pricePerPack ? parseFloat(pricePerPack) : null,
        pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
        description,
        cost: parseFloat(cost),
      },
    });

    res
      .status(201)
      .json({ message: "Medicine added successfully", medicine: newMedicine });
  } catch (error) {
    console.error("Error adding medicine:", error);
    res.status(500).json({ message: "Internal server error" });
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
    const lowStockMedicines = await prisma.medicine.findMany({
      where: {
        quantity: {
          lt: 5, // Fetch medicines with quantity less than 5
        },
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

export {
  addMedicine,
  getAllMedicines,
  deleteMedicine,
  lowStock,
  expiredMedicines,
};
