import { PrismaClient } from "@prisma/client";
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new PrismaClient();
import { io } from "../server.js";

// Your existing recordSale logic here, using io.emit as needed

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

    let adjustedQuantity = quantity; // Default to provided quantity
    let decrementField;

    // Adjust the quantity and decrement field based on the unit type
    switch (unitType) {
      case "strip":
        if (!medicine.stripPerPack || !medicine.stripQuantity) {
          return res.status(400).json({
            message:
              "Strips per pack or strip quantity is not defined for this medicine.",
          });
        }
        adjustedQuantity = quantity; // No further adjustment needed for strip quantity
        decrementField = "stripQuantity"; // Deduct from stripeQuantit stock
        break;
      case "pack":
        decrementField = "packQuantity";
        break;
      case "unit":
        decrementField = "unitQuantity";
        break;
      case "bottle":
        decrementField = "bottleQuantity";
        break;
      default:
        return res.status(400).json({ message: "Invalid unit type" });
    }

    // Check if the available quantity is sufficient
    const availableQuantity = medicine[decrementField] || 0;
    if (adjustedQuantity > availableQuantity) {
      return res.status(400).json({
        message: `Not enough quantity available. Only ${availableQuantity} ${decrementField.replace(
          "Quantity",
          ""
        )}(s) left in stock.`,
      });
    }

    // Register the sale in the database
    const sale = await prisma.sale.create({
      data: {
        medicineName,
        medicine: { connect: { id: medicineId } },
        quantity: adjustedQuantity,
        unitType, // Store the actual unit type (e.g., strip, pack, unit, etc.)
        sellingPrice: totalPrice / adjustedQuantity, // Calculate unit price
        totalPrice,
      },
    });

    // Update the available quantity in the medicine database
    await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        [decrementField]: {
          decrement: adjustedQuantity,
        },
      },
    });

    // Check for low stock for the current unit and send notifications
    const updatedMedicine = await prisma.medicine.findUnique({
      where: { id: medicineId },
    });

    let currentQuantity;
    switch (unitType) {
      case "strip":
        currentQuantity = updatedMedicine.stripQuantity;
        break;
      case "pack":
        currentQuantity = updatedMedicine.packQuantity;
        break;
      case "unit":
        currentQuantity = updatedMedicine.unitQuantity;
        break;
      case "bottle":
        currentQuantity = updatedMedicine.bottleQuantity;
        break;
      default:
        currentQuantity = 0;
    }

    if (currentQuantity < 10) {
      // Send notification for low stock of the current unit type
      const existingNotification = await prisma.notification.findFirst({
        where: { medicineId: updatedMedicine.id, type: "low-stock" },
      });

      if (!existingNotification) {
        const notification = await prisma.notification.create({
          data: {
            medicineId: updatedMedicine.id,
            name: updatedMedicine.name,
            type: "low-stock",
            quantity: currentQuantity,
            message: `${updatedMedicine.name} is running out of stock. Only ${currentQuantity} ${unitType}(s) left.`,
          },
        });

        // Send real-time notification to the client
        io.emit("lowStockAlert", notification);

        console.log(
          `Low stock alert sent for ${updatedMedicine.name} (ID: ${updatedMedicine.id})`
        );
      }
    }

    // Additional check: Always send a notification if packQuantity is low, regardless of unit sold
    if (updatedMedicine.packQuantity < 10) {
      const packNotification = await prisma.notification.create({
        data: {
          medicineId: updatedMedicine.id,
          name: updatedMedicine.name,
          type: "low-stock",
          quantity: updatedMedicine.packQuantity,
          message: `${updatedMedicine.name} is running out of stock. Only ${updatedMedicine.packQuantity} pack(s) left.`,
        },
      });

      io.emit("lowStockAlert", packNotification);
      console.log(
        `Low stock alert sent for packQuantity of ${updatedMedicine.name} (ID: ${updatedMedicine.id})`
      );
    }

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

const salesGrowthPerDate = async (req, res) => {
  try {
    // Aggregate daily sales data
    const sales = await prisma.sale.groupBy({
      by: ["createdAt"],
      _sum: {
        totalPrice: true, // Sum total sales for the day
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Transform and calculate growth rate
    const salesGrowth = sales.map((day, index) => {
      const currentSales = day._sum.totalPrice || 0;
      const prevSales = index > 0 ? sales[index - 1]._sum.totalPrice || 0 : 0;

      const growthRate = prevSales
        ? ((currentSales - prevSales) / prevSales) * 100
        : 0;

      return {
        date: day.createdAt.toISOString().split("T")[0], // Format date as YYYY-MM-DD
        sales: currentSales,
        growthRate: parseFloat(growthRate.toFixed(2)),
      };
    });

    res.status(200).json(salesGrowth);
  } catch (error) {
    console.error("Error calculating sales growth:", error.message);
    res.status(500).json({
      message: "Error calculating sales growth",
      error: error.message,
    });
  }
};
const totalQuantitySold = async (req, res) => {
  try {
    // Fetch all sales from the system
    const sales = await prisma.sale.findMany();

    // Calculate total stock sold
    const totalStockSold = sales.reduce((acc, sale) => acc + sale.quantity, 0);

    res.json({ totalStockSold });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching total sales (stock sold)." });
  }
};
const financialReport = async (req, res) => {
  try {
    // Fetch sales data grouped by date with related medicines to calculate expense
    const sales = await prisma.sale.findMany({
      include: {
        medicine: true, // Include the medicine details for cost calculation
      },
      orderBy: {
        createdAt: "asc", // Order by date in ascending order
      },
    });

    // Calculate revenue, expense, and profit for each day
    const dailyFinancials = sales.reduce((acc, sale) => {
      // Format the date (YYYY-MM-DD)
      const date = sale.createdAt.toISOString().split("T")[0];

      // Check if the date already exists in the accumulator
      if (!acc[date]) {
        acc[date] = {
          revenue: 0,
          expense: 0,
          profit: 0,
        };
      }

      // Revenue: Add sale price to the day's revenue
      const revenue = sale.totalPrice || 0;

      // Expense: Calculate based on the medicine sold and its cost
      let expense = 0;
      if (sale.medicine) {
        const quantitySold = sale.quantity || 0;
        const medicine = sale.medicine;
        console.log(medicine);
        // Use cost based on the medicine type (tablet, syrup, etc.)
        if (medicine.type === "tablet") {
          expense = medicine.costPerStrip * quantitySold;
        } else if (medicine.type === "Syrup") {
          expense = medicine.costPerPack * quantitySold;
        } else if (medicine.type === "cosmetics") {
          expense = medicine.cosmeticsCost * quantitySold;
        } else {
          expense = medicine.bottleCost * quantitySold; // default cost for other types
        }
      }

      // Update daily totals
      acc[date].revenue += revenue;
      acc[date].expense += expense;
      acc[date].profit += revenue - expense; // Profit = Revenue - Expense

      return acc;
    }, {});

    // Transform data into an array for easier display
    const financialsArray = Object.keys(dailyFinancials).map((date) => ({
      date,
      revenue: dailyFinancials[date].revenue,
      expense: dailyFinancials[date].expense,
      profit: dailyFinancials[date].profit,
    }));

    res.status(200).json(financialsArray);
  } catch (error) {
    console.error("Error calculating daily financials:", error.message);
    res.status(500).json({
      message: "Error calculating daily financials",
      error: error.message,
    });
  }
};

const getDailySales = async (req, res) => {
  try {
    const dailySales = await prisma.sale.groupBy({
      by: ["createdAt"], // Group sales by date
      _sum: {
        totalPrice: true, // Calculate the sum of sales for each day
      },
      orderBy: {
        createdAt: "asc", // Order by date in ascending order
      },
    });

    // Format the data into a simple array for the chart
    const formattedSales = dailySales.map((day) => ({
      date: day.createdAt.toISOString().split("T")[0], // Convert to YYYY-MM-DD format
      sales: day._sum.totalPrice || 0,
    }));

    res.status(200).json(formattedSales);
  } catch (error) {
    console.error("Error fetching daily sales data:", error.message);
    res.status(500).json({
      message: "Error fetching daily sales data",
      error: error.message,
    });
  }
};
const displayDailySales = async (req, res) => {
  try {
    // Fetch all sales and include associated medicine details
    const sales = await prisma.sale.findMany({
      include: {
        medicine: {
          select: {
            type: true, // e.g., 'tablet', 'syrup', etc.
            stripPerPack: true,
          },
        },
      },
    });

    // Group sales by date
    const groupedByDate = sales.reduce((acc, sale) => {
      const date = sale.createdAt.toISOString().split("T")[0];

      // Determine the quantity in packs
      let quantityInPacks = sale.quantity;
      if (
        sale.medicine.type === "tablet" &&
        sale.unitType === "strip" &&
        sale.medicine.stripPerPack
      ) {
        quantityInPacks = sale.quantity / sale.medicine.stripPerPack;
      }

      // Initialize the date group if it doesn't exist
      if (!acc[date]) {
        acc[date] = {
          date,
          totalQuantity: 0,
          totalPrice: 0,
        };
      }

      // Update total quantity and price for the date
      acc[date].totalQuantity += quantityInPacks;
      acc[date].totalPrice += sale.totalPrice || 0;

      return acc;
    }, {});

    // Convert grouped object into an array
    // Apply floor function to the total quantity for each day
    const formattedData = Object.values(groupedByDate).map((day) => ({
      date: day.date,
      totalQuantity: Math.floor(day.totalQuantity),
      totalPrice: day.totalPrice,
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching daily sales:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const salesDetails = async (req, res) => {
  const { date } = req.params;

  try {
    const sales = await prisma.sale.findMany({
      where: {
        createdAt: {
          gte: new Date(`${date}T00:00:00.000Z`),
          lt: new Date(`${date}T23:59:59.999Z`),
        },
      },
      include: {
        medicine: true, // Include related medicine details
      },
    });

    res.status(200).json(sales);
  } catch (error) {
    console.error("Error fetching sales details:", error);
    res.status(500).json({ message: "Error fetching sales details", error });
  }
};
const sendNotifications = async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server error" });
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
  salesGrowthPerDate,
  totalQuantitySold,
  financialReport,
  getDailySales,
  displayDailySales,
  salesDetails,
  sendNotifications,
};
