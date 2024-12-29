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

// Delete Sale Controller
const deleteSale = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Sale ID is required" });
  }

  try {
    // Check if the sale exists
    const sale = await prisma.sale.findUnique({ where: { id: parseInt(id) } });

    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    // Delete the sale
    await prisma.sale.delete({ where: { id: parseInt(id) } });

    res.status(200).json({ message: "Sale deleted successfully" });
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
    // Fetch all medicines with their related sales
    const medicines = await prisma.medicine.findMany({
      include: {
        sales: true, // Include related sales
      },
    });

    // Compute additional fields for each medicine
    const salesReport = medicines.map((medicine) => {
      // Calculate total revenue
      const totalRevenue = medicine.sales.reduce(
        (sum, sale) => sum + sale.totalPrice,
        0
      );

      // Calculate total units sold
      const unitsSold = medicine.sales.reduce(
        (sum, sale) => sum + sale.quantity,
        0
      );

      // Calculate total cost of sold items
      const totalCost = medicine.sales.reduce((sum, sale) => {
        let unitPrice = 0;

        // Determine the price based on the unit type
        switch (sale.unitType) {
          case "strip":
            unitPrice = medicine.costPerStrip || 0;
            break;
          case "pack":
            unitPrice = medicine.costPerPack || 0;
            break;
          case "bottle":
            unitPrice = medicine.bottleCost || 0;
            break;
          case "unit":
            unitPrice = medicine.costPerUnit || 0;
            break;
          default:
            unitPrice = 0; // Default to 0 if unitType is unknown
        }

        // Add the calculated cost for this sale
        return sum + unitPrice * sale.quantity;
      }, 0);

      // Calculate profit margin
      const profitMargin =
        totalRevenue > 0
          ? ((totalRevenue - totalCost) / totalRevenue) * 100
          : 0;

      // Gather all unit types from the sales
      const unitTypes = [
        ...new Set(medicine.sales.map((sale) => sale.unitType)),
      ];

      return {
        id: medicine.id,
        name: medicine.name,
        type: medicine.type,
        unitsSold,
        totalCost, // Include the calculated total cost
        totalRevenue,
        unitTypes,
        profitMargin: profitMargin.toFixed(2), // Keep two decimal places
      };
    });

    res.json(salesReport);
  } catch (error) {
    console.error("Error generating sales report:", error);
    res.status(500).json({ error: "Failed to fetch sales report" });
  }
};

//high and low seller
const getHighLowSeller = async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany({
      include: {
        sales: true, // Include related sales
      },
    });

    // Calculate total quantity sold for each medicine
    const medicineSales = medicines.map((medicine) => {
      if (!medicine.sales || medicine.sales.length === 0) {
        return { id: medicine.id, name: medicine.name, quantitySold: 0 };
      }

      // Calculate the total quantity sold
      const quantitySold = medicine.sales.reduce(
        (sum, sale) => sum + sale.quantity,
        0
      );

      return {
        id: medicine.id,
        name: medicine.name,
        quantitySold, // Track the quantity sold for sorting
      };
    });

    // Sort medicines by quantity sold in descending order (high sellers first)
    medicineSales.sort((a, b) => b.quantitySold - a.quantitySold);

    // Get the top 3 high sellers (most sold)
    const topHighSellers = medicineSales.slice(0, 3);

    // Get the top 3 low sellers (least sold)
    const topLowSellers = medicineSales.slice(-3).reverse(); // Slice last 3 and reverse to get lowest

    // Send the response with high and low sellers
    res.json({ topHighSellers, topLowSellers });
  } catch (error) {
    console.error("Error fetching high and low sellers:", error);
    res.status(500).json({ error: "Failed to fetch high and low sellers" });
  }
};

const getSystemTotalRevenue = async (req, res) => {
  try {
    // Fetch all sales and sum up the total revenue from the `totalPrice` field
    const totalRevenue = await prisma.sale.aggregate({
      _sum: {
        totalPrice: true, // Sum the totalPrice field from all sales records
      },
    });

    res.json({
      systemTotalRevenue: totalRevenue._sum.totalPrice || 0, // Return 0 if there are no sales
    });
  } catch (error) {
    console.error("Error fetching total revenue:", error);
    res.status(500).json({ error: "Failed to fetch total revenue" });
  }
};

const getTotalUnitsSold = async (req, res) => {
  try {
    // Fetch all sales along with their associated medicine details
    const sales = await prisma.sale.findMany({
      include: {
        medicine: true, // Include related medicine to access stripsPerPack and other details
      },
    });

    // Calculate total units sold
    const totalUnitsSold = sales.reduce((total, sale) => {
      const { unitType, quantity, medicine } = sale;

      if (unitType === "strip") {
        // Multiply quantity by strips per pack for strip type
        return Math.floor(total + quantity / (medicine.stripPerPack || 1));
      } else if (
        unitType === "pack" ||
        unitType === "bottle" ||
        unitType === "unit"
      ) {
        // Add quantity directly for pack, bottle, or unit
        return total + quantity;
      }

      // Default case: add quantity directly if no matching unitType
      return total + quantity;
    }, 0);

    res.json({
      totalUnitsSold,
    });
  } catch (error) {
    console.error("Error calculating total units sold:", error);
    res.status(500).json({ error: "Failed to calculate total units sold" });
  }
};

const salesGrowth = async (req, res) => {
  try {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    // Format dates to YYYY-MM-DD
    const formatDate = (date) => date.toISOString().split("T")[0];
    const todayDate = formatDate(today);
    const yesterdayDate = formatDate(yesterday);

    // Fetch sales for today and yesterday
    const sales = await prisma.sale.findMany({
      where: {
        createdAt: {
          gte: new Date(`${yesterdayDate}T00:00:00Z`),
          lt: new Date(`${todayDate}T23:59:59Z`),
        },
      },
    });

    // Separate today's and yesterday's sales
    let yesterdaySales = 0;
    let todaySales = 0;

    sales.forEach((sale) => {
      const saleDate = formatDate(new Date(sale.createdAt));
      if (saleDate === yesterdayDate) {
        yesterdaySales += sale.totalPrice || 0;
      }
      if (saleDate === todayDate) {
        todaySales += sale.totalPrice || 0;
      }
    });

    // Calculate growth rate
    const growthRate =
      yesterdaySales > 0
        ? ((todaySales - yesterdaySales) / yesterdaySales) * 100
        : todaySales > 0
        ? 100
        : 0;

    res.json({
      date: todayDate,
      growthRate: growthRate.toFixed(2), // Keep 2 decimal places
    });
  } catch (error) {
    console.error("Error calculating sales growth:", error);
    res.status(500).json({ error: "Failed to calculate sales growth" });
  }
};

export {
  recordSale,
  salesHistory,
  salesReport,
  deleteSale,
  getHighLowSeller,
  getSystemTotalRevenue,
  getTotalUnitsSold,
  salesGrowth,
};
