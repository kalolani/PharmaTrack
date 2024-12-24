import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

//add new sale
const recordSale = async (req, res) => {
  const { medicineId, medicineName, quantity, unitType, totalPrice } = req.body;
  if (!medicineId || !quantity || !unitType || !totalPrice) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    // Record the sale in the database
    const sale = await prisma.sale.create({
      data: {
        medicineName,
        medicineId,
        quantity,
        unitType,
        totalPrice,
      },
    });

    // Optionally, update the medicine quantity in stock
    await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        quantity: {
          decrement: quantity, // Decrease the stock by the quantity sold
        },
      },
    });

    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//sales history
const salesHistory = async (req, res) => {
  try {
    const sales = await prisma.sale.findMany(); // Ensure `sales` is properly defined
    res.json(sales);
  } catch (error) {
    console.error("Error fetching sales history:", error);
    res.status(500).json({ message: "Error fetching sales history" });
  }
};

export { recordSale, salesHistory };
