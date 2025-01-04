-- CreateTable
CREATE TABLE "ExpiredMedicine" (
    "id" SERIAL NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpiredMedicine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExpiredMedicine" ADD CONSTRAINT "ExpiredMedicine_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
