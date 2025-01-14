import express from "express";
import {
  register,
  login,
  changePassword,
} from "../controllers/authController.js";
const userRouter = express.Router();

// Registration and Login routes
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/change-password", changePassword);

export default userRouter;
