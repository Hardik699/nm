import { Router, RequestHandler } from "express";
import { SystemAsset, ISystemAsset } from "../models/SystemAsset";

const router = Router();

// Get all system assets
export const getAllAssets: RequestHandler = async (req, res) => {
  try {
    const assets = await SystemAsset.find().sort({ createdAt: -1 });
    res.json(assets);
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ error: "Failed to fetch assets" });
  }
};

// Get assets by category
export const getAssetsByCategory: RequestHandler = async (req, res) => {
  try {
    const { category } = req.params;
    const assets = await SystemAsset.find({ category }).sort({ createdAt: -1 });
    res.json(assets);
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ error: "Failed to fetch assets" });
  }
};

// Get single asset
export const getAsset: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await SystemAsset.findOne({ id });
    if (!asset) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }
    res.json(asset);
  } catch (error) {
    console.error("Error fetching asset:", error);
    res.status(500).json({ error: "Failed to fetch asset" });
  }
};

// Create new asset
export const createAsset: RequestHandler = async (req, res) => {
  try {
    const assetData: ISystemAsset = req.body;
    const asset = new SystemAsset(assetData);
    await asset.save();
    res.status(201).json(asset);
  } catch (error) {
    console.error("Error creating asset:", error);
    res.status(500).json({ error: "Failed to create asset" });
  }
};

// Update asset
export const updateAsset: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const assetData: Partial<ISystemAsset> = req.body;
    const asset = await SystemAsset.findOneAndUpdate(
      { id },
      { ...assetData, updatedAt: new Date() },
      { new: true },
    );
    if (!asset) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }
    res.json(asset);
  } catch (error) {
    console.error("Error updating asset:", error);
    res.status(500).json({ error: "Failed to update asset" });
  }
};

// Delete asset
export const deleteAsset: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await SystemAsset.findOneAndDelete({ id });
    if (!asset) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }
    res.json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error("Error deleting asset:", error);
    res.status(500).json({ error: "Failed to delete asset" });
  }
};

// Setup routes
router.get("/", getAllAssets);
router.get("/category/:category", getAssetsByCategory);
router.get("/:id", getAsset);
router.post("/", createAsset);
router.put("/:id", updateAsset);
router.delete("/:id", deleteAsset);

export function systemAssetsRouter() {
  return router;
}
