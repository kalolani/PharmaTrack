import express from "express";
import { addMedicine } from "../controllers/inventoryController.js";
const inventoryRouter = express.Router();

// Registration and Login routes
inventoryRouter.post("/add-medicine", addMedicine);
// userRouter.post("/login", login);

export default inventoryRouter;
