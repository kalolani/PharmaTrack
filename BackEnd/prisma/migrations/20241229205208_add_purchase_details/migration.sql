-- CreateTable
CREATE TABLE "Purchase" (
    "id" SERIAL NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "costPerStrip" DOUBLE PRECISION,
    "costPerPack" DOUBLE PRECISION,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "percentageStrip" DOUBLE PRECISION,
    "percentagePack" DOUBLE PRECISION,
    "percentageBottle" DOUBLE PRECISION,
    "percentageCosmetics" DOUBLE PRECISION,
    "percentageUnit" DOUBLE PRECISION,
    "sellingPriceBottle" DOUBLE PRECISION,
    "sellingPriceCosmetics" DOUBLE PRECISION,
    "sellingPriceStrip" DOUBLE PRECISION,
    "sellingPricePack" DOUBLE PRECISION,
    "packQuantity" INTEGER,
    "stripQuantity" INTEGER,
    "stripPerPack" INTEGER,
    "unitQuantity" INTEGER,
    "bottleQuantity" INTEGER,
    "bottleCost" DOUBLE PRECISION,
    "cosmeticsCost" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
