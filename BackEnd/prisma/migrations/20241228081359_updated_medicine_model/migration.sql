/*
  Warnings:

  - You are about to drop the column `description` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `packQuantity` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerPack` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerStrip` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerUnit` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `stripsPerPack` on the `Medicine` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MedicineType" AS ENUM ('tablet', 'syrup', 'cosmetics', 'others');

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "description",
DROP COLUMN "packQuantity",
DROP COLUMN "pricePerPack",
DROP COLUMN "pricePerStrip",
DROP COLUMN "pricePerUnit",
DROP COLUMN "stripsPerPack",
ADD COLUMN     "costPerPack" DOUBLE PRECISION,
ADD COLUMN     "costPerStrip" DOUBLE PRECISION,
ADD COLUMN     "percentagePack" DOUBLE PRECISION,
ADD COLUMN     "percentageStrip" DOUBLE PRECISION,
ADD COLUMN     "sellingPrice" DOUBLE PRECISION,
ADD COLUMN     "sellingPricePack" DOUBLE PRECISION,
ADD COLUMN     "sellingPriceStrip" DOUBLE PRECISION,
ALTER COLUMN "cost" DROP NOT NULL,
ALTER COLUMN "cost" DROP DEFAULT;
