import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
import inventoryRouter from "./routes/inventoryRoute.js";
import { recordSale } from "./controllers/salesControler.js";
import salesRouter from "./routes/salesRoute.js";
// Load environment variables from .env
dotenv.config();
// Allow requests from your front-end origin
const allowedOrigins = ["http://localhost:5175"]; // Your front-end URL
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Methods you want to allow
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

// Use CORS with the defined options

const app = express();
app.use(cors(corsOptions));
const prisma = new PrismaClient();

app.use(express.json());

//API endpoints
app.use("/api/user", userRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/sales", salesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
