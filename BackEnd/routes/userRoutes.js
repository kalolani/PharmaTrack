import express from "express";
import { register, login } from "../controllers/authController.js";
const userRouter = express.Router();

// Registration and Login routes
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;
