import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

// POST route to add a new medicine
const addMedicine = async (req, res) => {
  const {
    name,
    type,
    packQuantity,
    manufacturer,
    expiryDate,
    batchNumber,
    pricePerStrip,
    stripsPerPack,
    pricePerUnit,
    cost,
    description,
  } = req.body;

  try {
    // Check if the medicine already exists in the database by name
    const existingMedicine = await prisma.medicine.findUnique({
      where: { name },
    });

    // If medicine exists, update the stock
    if (existingMedicine) {
      const updatedMedicine = await prisma.medicine.update({
        where: { id: existingMedicine.id },
        data: {
          packQuantity: existingMedicine.packQuantity + packQuantity, // Update stock quantity
          updatedAt: new Date(), // Update the timestamp for the last modification
        },
      });

      return res.status(200).json({
        message: "Medicine stock updated successfully",
        data: updatedMedicine,
      });
    }

    // If medicine doesn't exist, create a new medicine entry
    let pricePerPackCalculated = pricePerStrip * stripsPerPack; // Calculate price per pack
    let costCalculated = pricePerStrip * stripsPerPack * packQuantity;

    if (pricePerUnit) {
      costCalculated = pricePerUnit * packQuantity; // Recalculate cost if price per unit is provided
    }

    const newMedicine = await prisma.medicine.create({
      data: {
        name,
        type,
        packQuantity,
        manufacturer,
        expiryDate: new Date(expiryDate), // Ensure expiry date is a Date object
        batchNumber,
        pricePerStrip: parseFloat(pricePerStrip),
        stripsPerPack: parseInt(stripsPerPack),
        pricePerPack: pricePerPackCalculated,
        pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
        cost: costCalculated,
        description,
      },
    });

    return res.status(201).json({
      message: "Medicine added successfully",
      data: newMedicine,
    });
  } catch (error) {
    console.error("Error adding or updating medicine:", error);
    return res.status(500).json({
      message: "Error processing the medicine",
      error: error.message,
    });
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
  searchMedicines,
  searchMedicineByName,
};
