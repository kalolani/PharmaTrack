import express from "express";
import {
  recordSale,
  salesHistory,
  salesReport,
} from "../controllers/salesControler.js";

const salesRouter = express.Router();

// Registration and Login routes
salesRouter.post("/record-sale", recordSale);
salesRouter.get("/sales-history", salesHistory);
salesRouter.get("/sales-report", salesReport);
export default salesRouter;
