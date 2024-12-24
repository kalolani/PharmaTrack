import express from "express";
import { recordSale, salesHistory } from "../controllers/salesControler.js";

const salesRouter = express.Router();

// Registration and Login routes
salesRouter.post("/record-sale", recordSale);
salesRouter.get("/sales-history", salesHistory);
export default salesRouter;
