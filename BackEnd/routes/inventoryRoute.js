import express from "express";
import {
  addMedicine,
  getAllMedicines,
} from "../controllers/inventoryController.js";
const inventoryRouter = express.Router();

// Registration and Login routes
inventoryRouter.post("/add-medicine", addMedicine);
inventoryRouter.get("/list-medicine", getAllMedicines);

export default inventoryRouter;
