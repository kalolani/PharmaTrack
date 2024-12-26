/*
  Warnings:

  - You are about to drop the column `pricePerUnit` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Medicine` table. All the data in the column will be lost.
  - Made the column `pricePerStrip` on table `Medicine` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "pricePerUnit",
DROP COLUMN "quantity",
ADD COLUMN     "packQuantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stripsPerPack" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "pricePerStrip" SET NOT NULL;
