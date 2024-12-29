import express from "express";
import {
  deleteSale,
  getHighLowSeller,
  getSystemTotalRevenue,
  recordSale,
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
export default salesRouter;
