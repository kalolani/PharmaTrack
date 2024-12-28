import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();

//add new sale

const recordSale = async (req, res) => {
  const { medicineId, medicineName, quantity, unitType, totalPrice } = req.body;

  // Validate input data
  if (!medicineId || !medicineName || !quantity || !unitType || !totalPrice) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Fetch the current medicine data from the database
    const medicine = await prisma.medicine.findUnique({
      where: { id: medicineId },
    });

    // Check if the medicine exists
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    // Determine the available quantity for the specified unitType
    let availableQuantity;
    switch (unitType) {
      case "strip":
        availableQuantity = medicine.stripQuantity || 0;
        break;
      case "pack":
        availableQuantity = medicine.packQuantity || 0;
        break;
      case "unit":
        availableQuantity = medicine.unitQuantity || 0;
        break;
      case "bottle":
        availableQuantity = medicine.bottleQuantity || 0;
        break;
      default:
        return res.status(400).json({ message: "Invalid unit type" });
    }

    // Check if the available quantity is sufficient
    if (quantity > availableQuantity) {
      return res.status(400).json({
        message: `Not enough quantity available. Only ${availableQuantity} ${unitType}(s) left in stock.`,
      });
    }

    // Register the sale in the database
    const sale = await prisma.sale.create({
      data: {
        medicineName,
        medicine: { connect: { id: medicineId } },
        quantity,
        unitType,
        sellingPrice: totalPrice / quantity, // Calculate unit price
        totalPrice,
      },
    });

    // Update the available quantity in the medicine database
    const decrementField = `${unitType}Quantity`;
    await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        [decrementField]: {
          decrement: quantity,
        },
      },
    });

    res.status(201).json({ message: "Sale recorded successfully", sale });
  } catch (error) {
    console.error("Error recording sale:", error);
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
