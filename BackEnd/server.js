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

export { io };

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

let unreadAlertsCount = 0; // In-memory store for unread alerts count

cron.schedule("15 22 * * *", async () => {
  console.log("Checking for unique expired medicines at 5:17 PM...");

  try {
    const today = new Date();

    // Fetch medicines that are expired and not already alerted
    const expiredMedicines = await prisma.medicine.findMany({
      where: {
        expiryDate: { lt: today },
        expiredMedicines: {
          none: { alerted: true }, // Use the correct relation name here
        },
      },
      include: {
        expiredMedicines: true, // Ensure the correct relation name is used
      },
    });

    if (expiredMedicines.length === 0) {
      console.log("No new expired medicines to alert.");
      return;
    }

    const newExpiredMedicines = [];
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

      if (!quantity) {
        console.log(
          `Medicine ${medicine.name} (ID: ${medicine.id}) has no valid quantity. Skipping.`
        );
        continue;
      }

      await prisma.expiredMedicine.create({
        data: {
          medicineId: medicine.id,
          name: medicine.name,
          type: medicine.type,
          manufacturer: medicine.manufacturer,
          quantity: quantity,
          expiryDate: medicine.expiryDate,
          alerted: true,
        },
      });

      newExpiredMedicines.push({
        name: medicine.name,
        id: medicine.id,
        quantity,
        type: medicine.type,
      });
    }

    if (newExpiredMedicines.length > 0) {
      // Increment the unread alert count
      unreadAlertsCount += 1;

      // Emit real-time alert and unread alerts count
      io.emit("expiredMedicineAlert", {
        expiredMedicines: newExpiredMedicines,
        unreadAlerts: unreadAlertsCount,
      });

      console.log(
        `Real-time alert sent for new expired medicines: ${newExpiredMedicines.length}`,
        newExpiredMedicines
      );
      console.log(`Unread alerts count: ${unreadAlertsCount}`);
    }
  } catch (error) {
    console.error("Error checking for expired medicines:", error);
  }
});

// Endpoint to reset unread alerts when user views the expiry management
app.post("/reset-unread-alerts", (req, res) => {
  unreadAlertsCount = 0; // Reset the count
  io.emit("unreadAlertsUpdated", unreadAlertsCount); // Notify all clients
  res.status(200).json({ message: "Unread alerts count reset." });
});

// Handle uncaught errors globally
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
