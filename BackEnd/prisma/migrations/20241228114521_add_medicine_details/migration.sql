/*
  Warnings:

  - You are about to drop the column `cost` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `sellingPrice` on the `Medicine` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "cost",
DROP COLUMN "sellingPrice",
ADD COLUMN     "bottleCost" DOUBLE PRECISION,
ADD COLUMN     "bottleQuantity" INTEGER,
ADD COLUMN     "cosmeticsCost" DOUBLE PRECISION,
ADD COLUMN     "packQuantity" INTEGER,
ADD COLUMN     "percentageBottle" DOUBLE PRECISION,
ADD COLUMN     "percentageCosmetics" DOUBLE PRECISION,
ADD COLUMN     "percentageUnit" DOUBLE PRECISION,
ADD COLUMN     "sellingPriceBottle" DOUBLE PRECISION,
ADD COLUMN     "sellingPriceCosmetics" DOUBLE PRECISION,
ADD COLUMN     "stripPerPack" INTEGER,
ADD COLUMN     "stripQuantity" INTEGER,
ADD COLUMN     "unitQuantity" INTEGER;
