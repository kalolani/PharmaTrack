import express from "express";
import {
  addMedicine,
  deleteMedicine,
  expiredMedicines,
  getAllMedicines,
  lowStock,
} from "../controllers/inventoryController.js";
const inventoryRouter = express.Router();

// Registration and Login routes
inventoryRouter.post("/add-medicine", addMedicine);
inventoryRouter.get("/list-medicine", getAllMedicines);
inventoryRouter.delete("/delete-medicine/:id", deleteMedicine);
inventoryRouter.get("/low-stock", lowStock);
inventoryRouter.get("/expired-medicines", expiredMedicines);

export default inventoryRouter;
