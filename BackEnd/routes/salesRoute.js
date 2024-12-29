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

export default salesRouter;
