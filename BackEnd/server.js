import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import userRouter from "./routes/userRoutes.js";
import inventoryRouter from "./routes/inventoryRoute.js";
import salesRouter from "./routes/salesRoute.js";
import purchaseRouter from "./routes/purchaseRoute.js";
import cron from "node-cron";

// Load environment variables from .env
dotenv.config();

// Allow requests from your front-end origin
const allowedOrigins = ["http://localhost:5173"]; // Your front-end URL
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

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

app.use(cors(corsOptions));
app.use(express.json());

const prisma = new PrismaClient();

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/sales", salesRouter);
app.use("/api/purchases", purchaseRouter);

// Real-Time Medicine Alerts
io.on("connection", (socket) => {
  console.log("Client connected");

  // Handling client disconnections
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  // Optionally, listen for other events from the client
  socket.on("customEvent", (data) => {
    console.log("Custom event data:", data);
  });
});

// Scheduler to Check for Expired Medicines
cron.schedule("57 9 * * *", async () => {
  console.log("Checking for expired medicines...");

  try {
    const expiredMedicines = await prisma.medicine.findMany({
      where: {
        expiryDate: { lt: new Date() },
      },
    });

    for (const medicine of expiredMedicines) {
      let quantity;

      // Map type to the appropriate quantity field
      if (medicine.type === "tablet") {
        quantity = medicine.packQuantity;
      } else if (medicine.type === "syrup") {
        quantity = medicine.bottleQuantity;
      } else if (["cosmetics", "other"].includes(medicine.type)) {
        quantity = medicine.unitQuantity;
      }

      // Skip if quantity is null or undefined
      if (quantity == null) {
        console.log(
          `Medicine ${medicine.name} (ID: ${medicine.id}) has no valid quantity specified. Skipping.`
        );
        continue;
      }

      // Store the expired medicine in the database
      await prisma.expiredMedicine.create({
        data: {
          medicineId: medicine.id,
          name: medicine.name,
          type: medicine.type,
          manufacturer: medicine.manufacturer,
          quantity: quantity,
          expiryDate: medicine.expiryDate,
        },
      });
      console.log(
        `Stored expired medicine: ${medicine.name} (ID: ${medicine.id}) with quantity ${quantity}.`
      );
    }

    // Emit a real-time alert for all expired medicines
    io.emit("expiredMedicineAlert", expiredMedicines);
    console.log("Real-time alert sent for expired medicines.");
  } catch (error) {
    console.error("Error fetching expired medicines:", error);
  }
});

// Handle uncaught errors globally
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
