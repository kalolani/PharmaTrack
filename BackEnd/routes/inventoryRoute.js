import express from "express";
import {
  addMedicine,
  deleteMedicine,
  getAllMedicines,
} from "../controllers/inventoryController.js";
const inventoryRouter = express.Router();

// Registration and Login routes
inventoryRouter.post("/add-medicine", addMedicine);
inventoryRouter.get("/list-medicine", getAllMedicines);
inventoryRouter.delete("/delete-medicine/:id", deleteMedicine);

export default inventoryRouter;
