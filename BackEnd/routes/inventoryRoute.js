import express from "express";
import {
  addMedicine,
  deleteMedicine,
  expiredItems,
  expiredMedicines,
  getAllMedicines,
  getSpecificMedicine,
  getTotalMedicinesCount,
  inventoryCount,
  inventoryList,
  lowStock,
  searchMedicineByName,
  searchMedicines,
  totalStockValue,
  updateMedicine,
} from "../controllers/inventoryController.js";
const inventoryRouter = express.Router();

// Registration and Login routes
inventoryRouter.post("/add-medicine", addMedicine);
inventoryRouter.post("/medicines/:id", getSpecificMedicine);
inventoryRouter.post("/medicines/:id", updateMedicine);
inventoryRouter.get("/list-medicine", getAllMedicines);
inventoryRouter.get("/list", inventoryList);
inventoryRouter.get("/count", inventoryCount);
inventoryRouter.get("/stock-value", totalStockValue);
inventoryRouter.get("/expired-items", expiredItems);
inventoryRouter.get("/total-medicines", getTotalMedicinesCount);
inventoryRouter.delete("/delete-medicine/:id", deleteMedicine);
inventoryRouter.get("/low-stock", lowStock);
inventoryRouter.get("/expired-medicines", expiredMedicines);
inventoryRouter.get("/search", searchMedicines);
inventoryRouter.get("/search-medicine/:name", searchMedicineByName);
export default inventoryRouter;
