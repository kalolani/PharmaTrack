import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Example: Create a User
app.post("/users", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email, age },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Example: Get All Users
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
