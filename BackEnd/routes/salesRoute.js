import express from "express";
import {
  deleteSale,
  getHighLowSeller,
  getSystemTotalRevenue,
  getTotalUnitsSold,
  recordSale,
  salesGrowth,
  salesHistory,
  salesReport,
  salesGrowthPerDate,
  totalQuantitySold,
  financialReport,
  getDailySales,
  displayDailySales,
  salesDetails,
  sendNotifications,
  resetNotifications,
  markAsRead,
} from "../controllers/salesControler.js";

const salesRouter = express.Router();

// Registration and Login routes
salesRouter.post("/record-sale", recordSale);
salesRouter.delete("/delete/:id", deleteSale);
salesRouter.get("/sales-history", salesHistory);
salesRouter.get("/sales-report", salesReport);
salesRouter.get("/high-low-sellers", getHighLowSeller);
salesRouter.get("/system-total-revenue", getSystemTotalRevenue);
salesRouter.get("/total-units-sold", getTotalUnitsSold);
salesRouter.get("/sales-growth", salesGrowth);
salesRouter.get("/daily-sales-growth", salesGrowthPerDate);
salesRouter.get("/sold-quantity", totalQuantitySold);
salesRouter.get("/financial-report", financialReport);
salesRouter.get("/daily-sales", getDailySales);
salesRouter.get("/display-daily-sales", displayDailySales);
salesRouter.get("/sales-detail/:date", salesDetails);
salesRouter.get("/notifications", sendNotifications);
salesRouter.post("/reset-notifications", resetNotifications);
salesRouter.put("/mark-as-read/:id", markAsRead);
export default salesRouter;
