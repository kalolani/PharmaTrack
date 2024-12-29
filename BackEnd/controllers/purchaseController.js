import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const router = express.Router();

// Route to handle new purchase creation
const purchase = async (req, res) => {
  const {
    medicineId,
    name,
    type,
    costPerStrip,
    costPerPack,
    expiryDate,
    batchNumber,
    manufacturer,
    percentageStrip,
    percentagePack,
    percentageBottle,
    percentageCosmetics,
    percentageUnit,
    sellingPriceBottle,
    sellingPriceCosmetics,
    sellingPriceStrip,
    sellingPricePack,
    packQuantity,
    stripQuantity,
    stripPerPack,
    unitQuantity,
    bottleQuantity,
    bottleCost,
    cosmeticsCost,
  } = req.body;

  try {
    // Create a new purchase record
    const newPurchase = await prisma.purchase.create({
      data: {
        medicineId: parseInt(medicineId), // Ensure medicineId is a valid number
        name,
        type,
        costPerStrip: parseFloat(costPerStrip),
        costPerPack: parseFloat(costPerPack),
        expiryDate: new Date(expiryDate),
        batchNumber,
        manufacturer,
        percentageStrip: parseFloat(percentageStrip),
        percentagePack: parseFloat(percentagePack),
        percentageBottle: parseFloat(percentageBottle),
        percentageCosmetics: parseFloat(percentageCosmetics),
        percentageUnit: parseFloat(percentageUnit),
        sellingPriceBottle: parseFloat(sellingPriceBottle),
        sellingPriceCosmetics: parseFloat(sellingPriceCosmetics),
        sellingPriceStrip: parseFloat(sellingPriceStrip),
        sellingPricePack: parseFloat(sellingPricePack),
        packQuantity: parseFloat(packQuantity),
        stripQuantity: parseFloat(stripQuantity),
        stripPerPack: parseFloat(stripPerPack),
        unitQuantity: parseFloat(unitQuantity),
        bottleQuantity: parseFloat(bottleQuantity),
        bottleCost: parseFloat(bottleCost),
        cosmeticsCost: parseFloat(cosmeticsCost),
      },
    });

    // Fetch the existing medicine record
    const medicine = await prisma.medicine.findUnique({
      where: { id: medicineId },
    });

    if (!medicine) {
      return res.status(404).json({ error: "Medicine not found" });
    }

    // Update the medicine record
    const updatedMedicine = await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        name: medicine.name,
        type,
        costPerStrip: parseFloat(costPerStrip),
        costPerPack: parseFloat(costPerPack),
        expiryDate: new Date(expiryDate),
        batchNumber,
        manufacturer,
        percentageStrip: parseFloat(percentageStrip),
        percentagePack: parseFloat(percentagePack),
        percentageBottle: percentageBottle
          ? parseFloat(percentageBottle)
          : null,
        percentageCosmetics: percentageCosmetics
          ? parseFloat(percentageCosmetics)
          : null,
        percentageUnit: percentageUnit ? parseFloat(percentageUnit) : null,
        sellingPriceBottle: sellingPriceBottle
          ? parseFloat(sellingPriceBottle)
          : null,
        sellingPriceCosmetics: sellingPriceCosmetics
          ? parseFloat(sellingPriceCosmetics)
          : null,
        sellingPriceStrip: parseFloat(sellingPriceStrip),
        sellingPricePack: parseFloat(sellingPricePack),
        // Ensure proper parsing for quantities before adding
        packQuantity:
          parseInt(medicine.packQuantity, 10) + parseInt(packQuantity, 10),
        stripQuantity:
          parseInt(medicine.stripQuantity, 10) + parseInt(stripQuantity, 10),
        stripPerPack: parseFloat(stripPerPack),
        unitQuantity:
          parseInt(medicine.unitQuantity, 10) + parseInt(unitQuantity, 10),
        bottleQuantity:
          parseInt(medicine.bottleQuantity, 10) + parseInt(bottleQuantity, 10),
        bottleCost: bottleCost ? parseFloat(bottleCost) : null,
        cosmeticsCost: cosmeticsCost ? parseFloat(cosmeticsCost) : null,
      },
    });

    res.status(201).json({
      message: "Purchase created and medicine updated successfully",
      newPurchase,
      updatedMedicine,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { purchase };
