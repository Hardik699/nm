import { Router, RequestHandler } from "express";
import { PCLaptop, IPCLaptop } from "../models/PCLaptop";

const router = Router();

// Get all PC/Laptops
export const getAllPCLaptops: RequestHandler = async (req, res) => {
  try {
    const items = await PCLaptop.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("Error fetching PC/Laptops:", error);
    res.status(500).json({ error: "Failed to fetch PC/Laptops" });
  }
};

// Get single PC/Laptop
export const getPCLaptop: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await PCLaptop.findOne({ id });
    if (!item) {
      res.status(404).json({ error: "PC/Laptop not found" });
      return;
    }
    res.json(item);
  } catch (error) {
    console.error("Error fetching PC/Laptop:", error);
    res.status(500).json({ error: "Failed to fetch PC/Laptop" });
  }
};

// Create new PC/Laptop
export const createPCLaptop: RequestHandler = async (req, res) => {
  try {
    const itemData: IPCLaptop = req.body;
    const item = new PCLaptop(itemData);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error("Error creating PC/Laptop:", error);
    res.status(500).json({ error: "Failed to create PC/Laptop" });
  }
};

// Update PC/Laptop
export const updatePCLaptop: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const itemData: Partial<IPCLaptop> = req.body;
    const item = await PCLaptop.findOneAndUpdate(
      { id },
      { ...itemData, updatedAt: new Date() },
      { new: true },
    );
    if (!item) {
      res.status(404).json({ error: "PC/Laptop not found" });
      return;
    }
    res.json(item);
  } catch (error) {
    console.error("Error updating PC/Laptop:", error);
    res.status(500).json({ error: "Failed to update PC/Laptop" });
  }
};

// Delete PC/Laptop
export const deletePCLaptop: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await PCLaptop.findOneAndDelete({ id });
    if (!item) {
      res.status(404).json({ error: "PC/Laptop not found" });
      return;
    }
    res.json({ message: "PC/Laptop deleted successfully" });
  } catch (error) {
    console.error("Error deleting PC/Laptop:", error);
    res.status(500).json({ error: "Failed to delete PC/Laptop" });
  }
};

// Setup routes
router.get("/", getAllPCLaptops);
router.get("/:id", getPCLaptop);
router.post("/", createPCLaptop);
router.put("/:id", updatePCLaptop);
router.delete("/:id", deletePCLaptop);

export function pcLaptopsRouter() {
  return router;
}
