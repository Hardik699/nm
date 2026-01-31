import mongoose from "mongoose";

const pcLaptopSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, enum: ["PC", "Laptop"], required: true },
  name: { type: String, required: true },
  mouseId: String,
  keyboardId: String,
  monitorId: String,
  motherboardId: String,
  ramIds: [String],
  storageIds: [String],
  cameraId: String,
  headphoneId: String,
  powerSupplyId: String,
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const PCLaptop =
  mongoose.models.PCLaptop || mongoose.model("PCLaptop", pcLaptopSchema);

export interface IPCLaptop {
  id: string;
  type: "PC" | "Laptop";
  name: string;
  mouseId?: string;
  keyboardId?: string;
  monitorId?: string;
  motherboardId?: string;
  ramIds?: string[];
  storageIds?: string[];
  cameraId?: string;
  headphoneId?: string;
  powerSupplyId?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
