import express from "express";
import { purchase } from "../controllers/purchaseController.js";
const purchaseRouter = express.Router();

// adding the purchase
purchaseRouter.post("/add-purchase", purchase);

export default purchaseRouter;
