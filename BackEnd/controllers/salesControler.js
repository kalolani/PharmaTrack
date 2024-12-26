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

//sales repotr
const salesReport = async (req, res) => {
  try {
    // Fetch all medicines
    const medicines = await prisma.medicine.findMany({
      include: {
        sales: true, // Include related sales
      },
    });

    // Compute additional fields for each medicine
    const salesReport = medicines.map((medicine) => {
      // Calculate total revenue and units sold
      const totalRevenue = medicine.sales.reduce(
        (sum, sale) => sum + sale.totalPrice,
        0
      );
      const unitsSold = medicine.sales.reduce(
        (sum, sale) => sum + sale.quantity,
        0
      );

      // Calculate profit margin
      const profitMargin =
        totalRevenue > 0
          ? ((totalRevenue - medicine.cost) / totalRevenue) * 100
          : 0;

      return {
        id: medicine.id,
        name: medicine.name,
        type: medicine.type,
        unitsSold,
        cost: medicine.cost,
        totalRevenue,
        profitMargin: profitMargin.toFixed(2), // Keep two decimal places
      };
    });

    res.json(salesReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch sales report" });
  }
};

export { recordSale, salesHistory, salesReport };
