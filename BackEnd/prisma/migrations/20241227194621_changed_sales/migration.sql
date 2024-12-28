/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `Sale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "totalPrice",
ADD COLUMN     "sellingPrice" DOUBLE PRECISION NOT NULL DEFAULT 0;
