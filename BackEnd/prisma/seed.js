import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin_password", 10); // Use a secure password
  await prisma.user.upsert({
    where: { email: "admin@example.com" }, // Replace with admin's email
    update: {}, // No update is needed
    create: {
      email: "admin@example.com", // Replace with admin's email
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin account seeded successfully");
}

main()
  .catch((e) => {
    console.error("Error seeding admin account:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
