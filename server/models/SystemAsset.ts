import mongoose from "mongoose";

const systemAssetSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  company: String,
  serialNumber: String,
  vendor: String,
  purchaseDate: String,
  warrantyEndDate: String,
  processorModel: String,
  ramSize: String,
  storageSize: String,
  storageType: String,
  model: String,
  vonageNumber: String,
  vonageExtCode: String,
  vonagePassword: String,
  vitelNumber: String,
  vitelPassword: String,
  vitelGlobalNumber: String,
  vitelGlobalPassword: String,
  cameraModel: String,
  headphoneModel: String,
  powerSupplyWatts: String,
  monitorSize: String,
  refreshRate: String,
  resolution: String,
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const SystemAsset =
  mongoose.models.SystemAsset ||
  mongoose.model("SystemAsset", systemAssetSchema);

export interface ISystemAsset {
  id: string;
  category: string;
  company?: string;
  serialNumber?: string;
  vendor?: string;
  purchaseDate?: string;
  warrantyEndDate?: string;
  processorModel?: string;
  ramSize?: string;
  storageSize?: string;
  storageType?: string;
  model?: string;
  vonageNumber?: string;
  vonageExtCode?: string;
  vonagePassword?: string;
  vitelNumber?: string;
  vitelPassword?: string;
  vitelGlobalNumber?: string;
  vitelGlobalPassword?: string;
  cameraModel?: string;
  headphoneModel?: string;
  powerSupplyWatts?: string;
  monitorSize?: string;
  refreshRate?: string;
  resolution?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
