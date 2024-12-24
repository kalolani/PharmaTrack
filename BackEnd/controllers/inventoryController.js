import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

// POST route to add a new medicine
const addMedicine = async (req, res) => {
  try {
    const {
      name,
      type,
      quantity,
      manufacturer,
      expiryDate,
      batchNumber,
      pricePerStrip,
      pricePerPack,
      pricePerUnit,
      description,
    } = req.body;

    // Validate input data
    if (
      !name ||
      !type ||
      !quantity ||
      !manufacturer ||
      !expiryDate ||
      !batchNumber ||
      !pricePerStrip ||
      !pricePerStrip
    ) {
      return res
        .status(400)
        .json({ message: "All fields except description are required" });
    }

    // Save to database
    const newMedicine = await prisma.medicine.create({
      data: {
        name,
        type,
        quantity: parseInt(quantity),
        manufacturer,
        expiryDate: new Date(expiryDate),
        batchNumber,
        pricePerStrip: parseFloat(pricePerStrip),
        pricePerPack: parseFloat(pricePerPack),
        pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
        description,
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

export { addMedicine };
